export const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    throw new Error('이메일을 확인해 주세요.');
  }
};

export const validateNickname = (nickname: string) => {
  if (nickname.length < 8 || nickname.length > 30) {
    throw new Error('닉네임 길이가 맞지 않습니다.');
  }
};

export const validatePassword = (password: string) => {
  if (password.length < 8 || password.length > 16) {
    throw new Error('비밀번호 길이가 맞지 않습니다.');
  }
};
