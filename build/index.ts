import type { ProxyOptions } from "vite";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// 代理配置相关
type ProxyItem = [string, string];
type ProxyList = ProxyItem[];
type ProxyTargetList = Record<string, ProxyOptions>;
const httpsRE = /^https:\/\//;

export const GLOB_CONFIG_FILE_NAME = "_app.config.js";
export const OUTPUT_DIR = "dist";

/**
 * 处理环境变量
 * @param envConf
 */
// @ts-ignore
export function wrapperEnv(envConf: Recordable): ViteEnv {
  // 此处为默认值，无需修改
  // @ts-ignore
  const rel: ViteEnv = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;

    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    if (envName === "VITE_PROXY" && realName) {
      try {
        /* eslint-disable no-eval */
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (error) {
        realName = "";
      }
    }
    rel[envName] = realName;
    if (typeof realName === "string") {
      process.env[envName] = realName;
    } else if (typeof realName === "object") {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return rel;
}

/**
 * 跨域代理重写
 * @param value
 * @param reg
 */
export function regExps(value: string, reg: string): string {
  return value.replace(new RegExp(reg, "g"), "");
}

/**
 * 环境变量
 */
// @ts-ignore
export function loadEnv(): ViteEnv {
  return import.meta.env;
}

export function isEnvDev(mode: string): boolean {
  return mode === "development";
}

export function isEnvProd(mode: string): boolean {
  return mode === "production";
}

export function isReportMode(): boolean {
  return process.env.REPORT === "true";
}

/**
 * 多代理配置
 * @param list
 */
export function createProxy(list: ProxyList = []) {
  const rel: ProxyTargetList = {};
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);

    // https://github.com/http-party/node-http-proxy#options
    rel[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ""),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return rel;
}

/**
 * 获取当前环境下生效的配置文件名
 */
export function getConfFiles() {
  const script = process.env.npm_lifecycle_script;
  const reg = new RegExp("--mode ([a-z_\\d]+)");
  const result = reg.exec(script as string) as any;
  if (result) {
    const mode = result[1] as string;
    return [".env", `.env.${mode}`];
  }
  return [".env", ".env.production"];
}

export function getEnvConfig(match = "VITE_GLOB_", confFiles = getConfFiles()) {
  let envConfig = {};
  confFiles.forEach((item) => {
    try {
      const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), item)));
      envConfig = { ...envConfig, ...env };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`Error in parsing ${item}`, e);
    }
  });
  const reg = new RegExp(`^(${match})`);
  Object.keys(envConfig).forEach((key) => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}

export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir);
}

export function getConfigFileName(env: Record<string, any>) {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || "__APP"}__CONF__`
    .toUpperCase()
    .replace(/\s/g, "");
}
