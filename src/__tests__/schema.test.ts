import { buildDatabaseSchema } from '../notion/schema';

describe('buildDatabaseSchema', () => {
  it('should create a database schema object', () => {
    const schema = buildDatabaseSchema({
      name: 'Demo DB',
      fields: [
        { name: '名称', type: 'title' },
        { name: '日期', type: 'date' },
        { name: '金额', type: 'number' }
      ]
    });

    expect(schema).toHaveProperty('properties');
  });
});
