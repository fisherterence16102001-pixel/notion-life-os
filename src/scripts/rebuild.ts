import fs from 'fs';
import path from 'path';

export function rebuildCache() {
  const cacheFile = path.join(process.cwd(), '.notion-cache.json');
  fs.writeFileSync(cacheFile, JSON.stringify({}, null, 2));
  return cacheFile;
}
