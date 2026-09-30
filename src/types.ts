export type PropertyType =
  | 'title'
  | 'rich_text'
  | 'number'
  | 'select'
  | 'multi_select'
  | 'status'
  | 'date'
  | 'checkbox'
  | 'url'
  | 'email'
  | 'phone_number'
  | 'relation'
  | 'rollup'
  | 'people'
  | 'files'
  | 'formula';

export interface DatabaseFieldConfig {
  name: string;
  type: PropertyType;
  options?: Record<string, unknown>;
  required?: boolean;
  description?: string;
}

export interface DatabaseConfig {
  name: string;
  description?: string;
  icon?: string;
  fields: DatabaseFieldConfig[];
  views?: ViewConfig[];
}

export interface ViewConfig {
  name: string;
  type: 'table' | 'board' | 'list' | 'calendar' | 'gallery' | 'timeline';
  filters?: Record<string, unknown>[];
  sorts?: Record<string, unknown>[];
  properties?: string[];
}

export interface SystemConfig {
  id: string;
  name: string;
  title: string;
  description?: string;
}
