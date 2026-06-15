export const normalizeText = (text: string): string => text.trim();

export const splitWords = (text: string): string[] => {
  const normalizedText = normalizeText(text);
  return normalizedText ? normalizedText.split(/\s+/) : [];
};
