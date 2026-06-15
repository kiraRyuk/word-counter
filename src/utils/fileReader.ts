export const INVALID_FILE_MESSAGE = 'Only .txt files are supported.';
export const FILE_READ_ERROR_MESSAGE = 'Unable to read the selected file.';

export const isTextFile = (file: File): boolean => file.name.toLowerCase().endsWith('.txt');

export const readTextFile = async (file: File): Promise<string> => {
  if (!isTextFile(file)) throw new Error(INVALID_FILE_MESSAGE);
  try {
    return await file.text();
  } catch {
    throw new Error(FILE_READ_ERROR_MESSAGE);
  }
};
