import fs from 'fs';

export class IdCache {
  private filePath: string;

  constructor(filePath = '.notion-cache.json') {
    this.filePath = filePath;
  }

  private read(): Record<string, string> {
    try {
      if (!fs.existsSync(this.filePath)) {
        return {};
      }

      const raw = fs.readFileSync(this.filePath, 'utf8');
      if (!raw.trim()) {
        return {};
      }

      return JSON.parse(raw) as Record<string, string>;
    } catch (error) {
      return {};
    }
  }

  private write(cache: Record<string, string>): void {
    fs.writeFileSync(this.filePath, JSON.stringify(cache, null, 2));
  }

  get(key: string): string | undefined {
    return this.read()[key];
  }

  set(key: string, value: string): void {
    const cache = this.read();
    cache[key] = value;
    this.write(cache);
  }

  remove(key: string): void {
    const cache = this.read();
    delete cache[key];
    this.write(cache);
  }
}
