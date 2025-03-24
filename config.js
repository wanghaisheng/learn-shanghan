// Premium features configuration
const premiumFeatures = {
  listen: {
    name: "高级语音分析",
    description: "AI智能分析发音细节，提供专业改进建议",
    trialLimit: 3,
    trialUsed: 2,
    color: "yellow"
  },
  speak: {
    name: "专业发音对比",
    description: "逐字比对您的发音与标准朗读，提供音调、语速改进建议",
    trialLimit: 3,
    trialUsed: 1,
    color: "purple"
  },
  read: {
    name: "记忆增强模式",
    description: "启用间隔重复提示，智能记忆曲线算法，提升记忆效率50%",
    trialLimit: 3,
    trialUsed: 3,
    color: "blue"
  },
  write: {
    name: "智能错误分析",
    description: "AI分析您的常见错误，提供个性化练习建议，避免重复错误",
    trialLimit: 3,
    trialUsed: 3,
    color: "green"
  }
};

// Premium membership subscription plans
const subscriptionPlans = [
  {
    name: "月度会员",
    price: "¥39",
    period: "每月",
    features: ["无限使用所有高级功能", "自定义学习计划", "每日学习数据分析", "去除广告"]
  },
  {
    name: "年度会员",
    price: "¥299",
    period: "每年",
    popular: true,
    discount: "相当于¥25/月",
    features: ["无限使用所有高级功能", "自定义学习计划", "每日学习数据分析", "去除广告", "专属学习资料包"]
  },
  {
    name: "终身会员",
    price: "¥699",
    period: "一次付费，终身使用",
    features: ["无限使用所有高级功能", "自定义学习计划", "每日学习数据分析", "去除广告", "专属学习资料包", "优先体验新功能"]
  }
];

export { premiumFeatures, subscriptionPlans };