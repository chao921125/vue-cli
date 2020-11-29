import { createApp } from "vue";
import VueI18n from "vue-i18n";
import store from "@/store";
import util from "@plugins/utils/util";

const app = createApp({});

app.use(VueI18n);

const storeI18n = store.getters["i18n"];

function loadLocaleMessages() {
  const locales = require.context("./", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const i18n = new VueI18n({
  locale: storeI18n || process.env.VUE_APP_LOCAL,
  fallbackLocale: storeI18n || process.env.VUE_APP_LOCAL,
  messages: loadLocaleMessages(),
  missing: (locale, key, vm) => {
    // 处理翻译缺失
    util.log.danger(">>>>>> i18n locale >>>>>>");
    console.log(locale);
    util.log.danger(">>>>>> i18n key >>>>>>");
    console.log(key);
    util.log.danger(">>>>>> Vue 实例 >>>>>>");
    console.log(vm);
  },
});

app.use(i18n);
