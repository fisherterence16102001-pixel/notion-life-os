export interface DailyAnalysisInput {
  exerciseMinutes?: number;
  sleepHours?: number;
  readingMinutes?: number;
  income?: number;
  expense?: number;
  ecommerceSales?: number;
  ecommerceNetProfit?: number;
  habitCompletionRate?: number;
  studyMinutes?: number;
  weight?: number;
  bodyFat?: number;
}

export function buildDailyAnalysis(data: DailyAnalysisInput) {
  const highlights: string[] = [];
  const problems: string[] = [];
  const actions: string[] = [];

  if ((data.exerciseMinutes ?? 0) >= 30) {
    highlights.push('运动完成良好');
  } else {
    problems.push('运动量不足');
    actions.push('安排 20-30 分钟运动');
  }

  if ((data.sleepHours ?? 0) >= 7) {
    highlights.push('睡眠达到目标');
  } else {
    problems.push('睡眠不足');
    actions.push('提前 30 分钟睡眠');
  }

  if ((data.readingMinutes ?? 0) >= 20) {
    highlights.push('阅读时间达标');
  } else {
    problems.push('阅读时间偏低');
    actions.push('安排 20 分钟阅读');
  }

  if ((data.habitCompletionRate ?? 0) >= 80) {
    highlights.push('习惯完成率高');
  } else {
    problems.push('习惯维持不足');
    actions.push('重置 3 个关键习惯');
  }

  if ((data.ecommerceNetProfit ?? 0) > 0) {
    highlights.push('电商净利润为正');
  } else {
    problems.push('电商净利润偏低');
    actions.push('检查推广和售后结构');
  }

  if (highlights.length === 0) {
    highlights.push('整体节奏正常');
  }

  if (problems.length === 0) {
    problems.push('目前未发现明显问题');
  }

  if (actions.length === 0) {
    actions.push('继续保持当前节奏');
  }

  return {
    highlights: highlights.slice(0, 3),
    problems: problems.slice(0, 3),
    actions: actions.slice(0, 3),
    summary: `今日整体数据：运动 ${(data.exerciseMinutes ?? 0)} 分钟，睡眠 ${(data.sleepHours ?? 0)} 小时，阅读 ${(data.readingMinutes ?? 0)} 分钟。`
  };
}
