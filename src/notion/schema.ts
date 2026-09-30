import { DatabaseConfig } from '../types';

export function buildDatabaseSchema(database: DatabaseConfig) {
  const properties: Record<string, any> = {};

  for (const field of database.fields) {
    properties[field.name] = mapField(field);
  }

  return {
    object: 'database',
    title: [
      {
        type: 'text',
        text: { content: database.name }
      }
    ],
    properties
  };
}

function mapField(field: { name: string; type: string; options?: Record<string, unknown> }) {
  switch (field.type) {
    case 'title':
      return { title: {} };
    case 'rich_text':
      return { rich_text: {} };
    case 'number':
      return { number: {} };
    case 'select':
      return {
        select: {
          options: ((field.options?.options ?? []) as any[]).map((option: any) => ({
            name: String(option),
            color: 'default'
          }))
        }
      };
    case 'multi_select':
      return {
        multi_select: {
          options: ((field.options?.options ?? []) as any[]).map((option: any) => ({
            name: String(option),
            color: 'default'
          }))
        }
      };
    case 'status':
      return {
        status: {
          options: ((field.options?.options ?? []) as any[]).map((option: any) => ({
            name: String(option),
            color: 'default'
          }))
        }
      };
    case 'date':
      return { date: {} };
    case 'checkbox':
      return { checkbox: {} };
    case 'url':
      return { url: {} };
    case 'email':
      return { email: {} };
    case 'phone_number':
      return { phone_number: {} };
    case 'relation':
      return { relation: { database_id: '', type: 'single_property' } };
    case 'rollup':
      return {
        rollup: {
          function: 'count',
          relation_property_name: field.name,
          relation_property_path: field.name
        }
      };
    case 'people':
      return { people: {} };
    case 'files':
      return { files: {} };
    case 'formula':
      return { formula: { expression: 'emptyString()' } };
    default:
      return { rich_text: {} };
  }
}
