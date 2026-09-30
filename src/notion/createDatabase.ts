import { notion } from '../utils/notion';
import { DatabaseConfig } from '../types';
import { buildDatabaseSchema } from './schema';
import { logger } from '../config';

export async function createDatabase(database: DatabaseConfig, parentPageId: string) {
  const payload = {
    parent: { type: 'page_id', page_id: parentPageId },
    ...buildDatabaseSchema(database)
  };

  try {
    const result = await notion.databases.create(payload as any);
    logger.info(`Database created: ${database.name} (${result.id})`);
    return result;
  } catch (error) {
    logger.error(`Failed to create database: ${database.name}`);
    throw error;
  }
}
