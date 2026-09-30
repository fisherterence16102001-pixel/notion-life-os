import { env, logger } from './config';
import { initializeNotionLifeOs } from './notion/init';
import { dryRunLog } from './utils/sync';

async function main(): Promise<void> {
  logger.info(`Starting ${env.appName}`);

  if (env.dryRun) {
    dryRunLog('Dry-run enabled. No writes will be executed.');
    return;
  }

  await initializeNotionLifeOs();
}

main().catch((error) => {
  logger.error(`Application error: ${String(error)}`);
  process.exit(1);
});
