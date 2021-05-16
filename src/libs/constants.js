export default {
  i18n: {
    AR_EG: "zh-CN", // 阿拉伯
    BG_BG: "zh-CN", // 保加利亚语
    CA_ES: "zh-CN", // 加泰罗尼亚语
    CS_CZ: "zh-CN", // 捷克语
    DE_DE: "zh-CN", // 德语
    EL_GR: "zh-CN", // 希腊语
    EN_GB: "zh-CN", // 英语
    EN_US: "en-US", // 英语（美式）
    ES_ES: "zh-CN", // 西班牙语
    ET_EE: "zh-CN", // 爱沙尼亚语
    FA_IR: "zh-CN", // 波斯语
    FI_FI: "zh-CN", // 芬兰语
    FR_BE: "zh-CN", // 法语（比利时）
    FR_FR: "zh-CN", // 法语
    IS_IS: "zh-CN", // 冰岛语
    IT_IT: "zh-CN", // 意大利语
    JA_JP: "zh-CN", // 日语
    KO_KR: "zh-CN", // 韩语/朝鲜语
    NB_NO: "zh-CN", // 挪威
    NL_BE: "zh-CN", // 荷兰语（比利时）
    NL_NL: "zh-CN", // 荷兰语
    PL_PL: "zh-CN", // 波兰语
    PT_BR: "zh-CN", // 葡萄牙语(巴西)
    PT_PT: "zh-CN", // 葡萄牙语
    SK_SK: "zh-CN", // 斯洛伐克语
    SR_RS: "zh-CN", // 塞尔维亚
    SL_SI: "zh-CN", // 斯洛文尼亚
    SV_SE: "zh-CN", // 瑞典语
    TH_TH: "zh-CN", // 泰语
    TR_TR: "zh-CN", // 土耳其语
    RU_RU: "zh-CN", // 俄罗斯语
    UK_UA: "zh-CN", // 乌克兰语
    VI_VN: "zh-CN", // 越南语
    ZH_CN: "zh-CN", // 简体中文
    ZH_TW: "zh-TW" // 繁体中文
  },
  reg: {
    chinaPhone: /^0?(13[0-9]|14[57]|15[0-9]|166|17[0-9]|18[0-9]|19[89])[0-9]{8}$/,
    phoneCode: /^[0-9]{6}$/,
    number: /^[0-9]+$/,
    NumberTwoDecimal: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
    chinaName: /^[\u4E00-\u9FA5]{2,4}$/,
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  },
  phoneCode: {
    time: 60,
    btnStartText: "获取验证码",
    btnEndText: "重新发送",
  },
  images: {
    loginLogo: require("@/assets/images/login/login-left.png"),
  }
};
