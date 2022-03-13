import type { ConfigEnv, UserConfigExport } from "vite";
import { loadEnv } from "vite";
import { resolve } from "path";
// @ts-ignore
import dayjs from "dayjs";
// @ts-ignore
import packageFile from "./package.json";
// @ts-ignore
import { wrapperEnv, createProxy, OUTPUT_DIR } from "./build";
// @ts-ignore
import { getVitePlugins } from "./build/plugins";

// 映射路径
function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

const { dependencies, devDependencies, name, version } = packageFile;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
};

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd();
  const viteEnv = wrapperEnv(loadEnv(mode, root));
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;
  const isBuild = command === "build";

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        {
          find: "vue-i18n",
          replacement: "vue-i18n/dist/vue-i18n.cjs.js",
        },
        // /@/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve("src") + "/",
        },
        // /#/xxxx => types/xxxx
        {
          find: /#\//,
          replacement: pathResolve("types") + "/",
        },
      ],
    },
    server: {
      open: true,
      https: true,
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [],
    },
    build: {
      target: "es2015",
      cssTarget: "chrome80",
      outDir: OUTPUT_DIR,
      // minify: 'terser',
      /**
       * 当 minify=“minify:'terser'” 解开注释
       * Uncomment when minify="minify:'terser'"
       */
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    define: {
      // setting vue-i18-next
      // Suppress warning
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
    plugins: getVitePlugins(command, isBuild),
    optimizeDeps: {
      // @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly
      include: [
        "@vue/runtime-core",
        "@vue/shared",
        "@vueuse/core",
        "@iconify/vue",
        "@iconify/iconify",
        "pinia",
        "vue-i18n",
        "lodash-es",
        "element-plus/lib/locale/lang/en",
        "element-plus/lib/locale/lang/zh-cn",
        "vxe-table/lib/locale/lang/zh-CN",
        "vxe-table/lib/locale/lang/en-US",
      ],
      exclude: ["@zougt/vite-plugin-theme-preprocessor/dist/browser-utils"],
    },
  };
};
