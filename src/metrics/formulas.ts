export interface SaleMetrics {
  sales: number;
  cost: number;
  logistics: number;
  afterSaleCost: number;
  promotionCost: number;
}

export function calculateGrossProfit(sales: number, cost: number): number {
  return Number((sales - cost).toFixed(2));
}

export function calculateNetProfit(
  sales: number,
  cost: number,
  logistics: number,
  afterSaleCost: number,
  promotionCost: number
): number {
  return Number((sales - cost - logistics - afterSaleCost - promotionCost).toFixed(2));
}

export function calculateROI(netProfit: number, totalCost: number): number {
  if (totalCost === 0) return 0;
  return Number(((netProfit / totalCost) * 100).toFixed(2));
}

export function calculateBMI(weightKg: number, heightM: number): number {
  if (heightM <= 0) return 0;
  return Number((weightKg / (heightM * heightM)).toFixed(2));
}

export function calculateCompletionRate(actual: number, target: number): number {
  if (target === 0) return 0;
  return Number(((actual / target) * 100).toFixed(2));
}

export function calculateTrend(values: number[]): number {
  if (values.length < 2) return 0;
  const first = values[0];
  const last = values[values.length - 1];
  return Number(((last - first) / Math.max(1, Math.abs(first))).toFixed(2));
}

export function getLevelByXp(xp: number): number {
  return Math.max(1, Math.floor(Math.sqrt(xp)) + 1);
}

export function calculateDefaultXp(
  habitCompleted: number,
  studyMinutes: number,
  workoutMinutes: number,
  top3Completed: number,
  dailyReview: boolean,
  weeklyGoal: boolean,
  monthlyGoal: boolean
): number {
  let xp = 0;
  xp += habitCompleted * 10;
  xp += Math.floor(studyMinutes / 30) * 10;
  xp += Math.floor(workoutMinutes / 30) * 15;
  xp += top3Completed * 20;
  xp += dailyReview ? 10 : 0;
  xp += weeklyGoal ? 50 : 0;
  xp += monthlyGoal ? 200 : 0;
  return xp;
}
