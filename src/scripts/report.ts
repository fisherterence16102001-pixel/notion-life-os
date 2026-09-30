import { buildViews } from '../notion/view';
import { ensureNotionInfrastructure } from '../notion/infrastructure';
import { buildDailyAnalysis } from '../agents/autoAnalysis';

export function buildSummaryReport() {
  const daily = buildDailyAnalysis({
    exerciseMinutes: 45,
    sleepHours: 7.4,
    readingMinutes: 28,
    habitCompletionRate: 88,
    ecommerceNetProfit: 320,
    studyMinutes: 60
  });

  return {
    views: buildViews(),
    infrastructure: ensureNotionInfrastructure(),
    dailySummary: daily
  };
}
