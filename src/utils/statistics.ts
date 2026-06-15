import type { TextStatistics } from '@/types/statistics';
import { normalizeText, splitWords } from '@/utils/textParser';

export const getWordCount = (text: string): number => splitWords(text).length;
export const getCharacterCount = (text: string): number => text.length;
export const getCharacterCountWithoutSpaces = (text: string): number => text.replace(/\s/g, '').length;
export const getSentenceCount = (text: string): number => normalizeText(text) ? (text.match(/[.!?]/g) ?? []).length : 0;
export const getParagraphCount = (text: string): number => normalizeText(text) ? normalizeText(text).split(/\n\s*\n/).filter(Boolean).length : 0;

export const getTextStatistics = (text: string): TextStatistics => ({
  words: getWordCount(text),
  characters: getCharacterCount(text),
  charactersNoSpaces: getCharacterCountWithoutSpaces(text),
  sentences: getSentenceCount(text),
  paragraphs: getParagraphCount(text)
});
