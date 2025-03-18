import { v4 as uuidv4 } from 'uuid';

interface ExtractHashtagText {
  id: string;
  str: string;
  isHashtag: boolean;
  startIdx: number;
  endIdx: number;
}

export const extractHashtags = (text: string): ExtractHashtagText[] => {
  const parsedText: ExtractHashtagText[] = [];
  const words = text.split(' ');

  words.forEach((word, index) => {
    const startIdx = index === 0 ? 0 : parsedText[index - 1].endIdx + 2;
    const endIdx = startIdx + word.length - 1;

    parsedText.push({
      id: uuidv4(),
      str: word,
      isHashtag: word.startsWith('#'),
      startIdx,
      endIdx,
    });
  });

  return parsedText;
};
