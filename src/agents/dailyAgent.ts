import { summarizeData } from './aiSummary';

export function runDailyAgent(data: Record<string, unknown>) {
  const summary = summarizeData(data);

  return {
    highlights: ['完成关键任务', '保持节奏', '继续推进成长'],
    issues: ['注意休息', '减少无效分心', '关注执行质量'],
    boss: '今日主任务',
    actions: ['完成 Top 3', '记录复盘', '安排明日优先级'],
    summary
  };
}
