import * as dotenv from 'dotenv';

dotenv.config();

export interface AppEnv {
  notionToken: string;
  parentPageId: string;
  appName: string;
  defaultLocale: string;
  dryRun: boolean;
  logLevel: string;
}

export function getEnv(): AppEnv {
  const notionToken = process.env.NOTION_TOKEN;
  const parentPageId = process.env.PARENT_PAGE_ID;
  const appName = process.env.APP_NAME || 'FAN DA WAN LIFE OS';
  const defaultLocale = process.env.DEFAULT_LOCALE || 'zh-CN';
  const dryRun = (process.env.DRY_RUN || 'false').toLowerCase() === 'true';
  const logLevel = process.env.LOG_LEVEL || 'info';

  if (!notionToken) {
    throw new Error('Missing NOTION_TOKEN in environment variables');
  }
  if (!parentPageId) {
    throw new Error('Missing PARENT_PAGE_ID in environment variables');
  }

  return {
    notionToken,
    parentPageId,
    appName,
    defaultLocale,
    dryRun,
    logLevel
  };
}
