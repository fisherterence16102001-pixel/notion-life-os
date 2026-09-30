import fs from 'fs';
import path from 'path';

export function createBackupSnapshot(outputDir = 'backups') {
  const timeStamp = new Date().toISOString().replace(/[:.]/g, '-');
  const folder = path.join(process.cwd(), outputDir, timeStamp);
  fs.mkdirSync(folder, { recursive: true });

  for (const file of ['.env', '.notion-cache.json', 'README.md']) {
    const source = path.join(process.cwd(), file);
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, path.join(folder, file));
    }
  }

  return folder;
}
