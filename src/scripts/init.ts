import { initializeNotionLifeOs } from '../notion/init';

async function run(): Promise<void> {
  await initializeNotionLifeOs();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
