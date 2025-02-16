export interface ParsedText {
  str: string;
  isHashtag: boolean;
  idxArr: number[];
}

export const extractHashtags = (text: string): ParsedText[] => {
  if (text.length === 0) {
    return [];
  }

  const words = text.split(' ');
  let index = 0;

  return words.map(word => {
    const idxArr = [index, index + word.length - 1];
    index += word.length + 1;

    return {
      str: word,
      isHashtag: word.startsWith('#'),
      idxArr,
    };
  });
};
