import { Client } from '@notionhq/client';
import { env } from '../config';

export const notion = new Client({
  auth: env.notionToken
});

export async function pageExists(pageId: string): Promise<boolean> {
  try {
    await notion.pages.retrieve({ page_id: pageId });
    return true;
  } catch (error) {
    return false;
  }
}
