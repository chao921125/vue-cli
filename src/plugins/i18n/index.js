// import { nextTick } from "vue"
import { createI18n } from "vue-i18n"
import store from "@/store";
import util from "@/plugins/utils";

const storeI18n = store.getters["store/i18n/getI18n"];
let availableLocales = [];

function loadLocaleMessages() {
  const locales = require.context("./", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
      availableLocales.push(matched[1]);
    }
  });
  return messages;
}

const i18n = createI18n({
  legacy: true, // must false ? i`ll test on last version
  sync: true,
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  locale: storeI18n || process.env.VUE_APP_LOCAL,
  fallbackLocale: storeI18n || process.env.VUE_APP_LOCAL,
  availableLocales: availableLocales,
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
})

export default i18n;
