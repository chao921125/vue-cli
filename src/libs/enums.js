export default {
  tradeType: {
    ALL: {
      value: "9",
      description: "全部",
    },
    TRIAL: {
      value: "3",
      description: "试用",
    },
    RECHARGE: {
      value: "0",
      description: "充值",
    },
    CONSUME: {
      value: "1",
      description: "消费",
    },
  },
  stageCode: {
    ZJXuShui: {
      value: 1,
      description: "蓄水",
    },
    ZJYuRe: {
      value: 2,
      description: "预热",
    },
    ZJHuoDong: {
      value: 3,
      description: "活动",
    },
    ZJZhuanHua: {
      value: 4,
      description: "余热",
    },
    ZJRiChang: {
      value: 0,
      description: "日常",
    },
  },
  planCrowd: {
    1: {
      name: "广泛拉新",
      value: 1,
      multiple: 1.5,
      proposal: 0,
      proposalName: "不建议",
    },
    2: {
      name: "类目拉新",
      value: 2,
      multiple: 2,
      proposal: 9,
      proposalName: "可测",
    },
    4: {
      name: "竞品拉新",
      value: 4,
      multiple: 3,
      proposal: 1,
      proposalName: "可测",
    },
    8: {
      name: "认知用户",
      value: 8,
      multiple: 1.5,
      proposal: 0,
      proposalName: "不建议",
    },
    16: {
      name: "兴趣用户",
      value: 16,
      multiple: 2,
      proposal: 9,
      proposalName: "可测",
    },
    32: {
      name: "成交用户",
      value: 32,
      multiple: 3,
      proposal: 1,
      proposalName: "可测",
    },
  },
  planGoal: {
    ZJEffect: {
      value: "0",
      description: "效果优先",
      messageTop: "系统会以投放效果为前提",
      messageBottom: "决定投放策略",
    },
    ZJBudget: {
      value: "1",
      description: "预算优先",
      messageTop: "系统会以预算为前提决定",
      messageBottom: "投放策略",
    },
  },
  goalType: {
    SHORT: {
      name: "短",
      value: "3",
      description: "",
    },
    MIDDLE: {
      name: "中",
      value: "7",
      description: "",
    },
    LONG: {
      name: "长",
      value: "1",
      description: "",
    },
  },
};
