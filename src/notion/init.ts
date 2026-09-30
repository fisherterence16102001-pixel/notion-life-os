import { databases } from '../data/databases';
import { env, logger } from '../config';
import { IdCache } from '../utils/idCache';
import { createDatabase } from './createDatabase';

export async function initializeNotionLifeOs() {
  const cache = new IdCache('.notion-cache.json');

  logger.info(`Initializing Notion Life OS under parent page: ${env.parentPageId}`);

  for (const database of databases) {
    const key = `db:${database.name}`;
    const existingId = cache.get(key);

    if (existingId) {
      logger.info(`Database already exists in cache: ${database.name} -> ${existingId}`);
      continue;
    }

    try {
      const created = await createDatabase(database, env.parentPageId);
      cache.set(key, created.id);
    } catch (error) {
      logger.error(`Unable to initialize database: ${database.name}`);
      logger.error(String(error));
    }
  }

  logger.info('Initialization complete');
}
