interface ExtractHashtagText {
  id: number;
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
      id: index,
      str: word,
      isHashtag: word.startsWith('#'),
      startIdx,
      endIdx,
    });
  });

  return parsedText;
};

export const getOnlyHashtags = (text: string): string[] =>
  text
    .split(' ')
    .filter((word) => word.startsWith('#') && word.length > 1)
    .map((word) => word.slice(1));
