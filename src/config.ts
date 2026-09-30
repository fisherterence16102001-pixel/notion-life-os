import { getEnv } from './env';
import { Logger } from './logger';

export const env = getEnv();
export const logger = new Logger(env.logLevel as any);

export const appConfig = {
  appName: env.appName,
  systems: [
    { id: 'daily', name: '01 日常', title: '日常' },
    { id: 'growth', name: '02 成长', title: '成长' },
    { id: 'wealth', name: '03 财富', title: '财富' },
    { id: 'fitness', name: '04 身体', title: '身体' },
    { id: 'life', name: '05 生活', title: '生活' },
    { id: 'relationship', name: '06 关系', title: '关系' },
    { id: 'spirit', name: '07 精神', title: '精神' },
    { id: 'records', name: '08 记录', title: '记录' }
  ]
};
