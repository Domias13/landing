export type Lang = 'ru' | 'uk';

/** Returns the Ukrainian string when lang is 'uk', otherwise the Russian (default) string. */
export function t(lang: Lang, ru: string, uk: string): string {
  return lang === 'uk' ? uk : ru;
}
