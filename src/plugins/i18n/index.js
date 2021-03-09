import { createI18n } from 'vue-i18n'
import store from "@/store";
import util from "@/plugins/utils";

const storeI18n = store.getters["store/i18n/getI18n"];

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
  console.log("storeI18n", messages);
  return messages;
}

export default createI18n({
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
})
