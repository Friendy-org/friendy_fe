import { FORM_ERROR } from '../constants/errorMessages';

export const validateEmail = (email: string) => {
  validateNull(email);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    throw new Error(FORM_ERROR.EMAIL.INVALID);
  }
};

export const validateNickname = (nickname: string) => {
  validateNull(nickname);

  if (nickname.length < 2 || nickname.length > 20) {
    throw new Error(FORM_ERROR.NICKNAME.LENGTH);
  }
};

export const validatePassword = (password: string) => {
  validateNull(password);

  if (password.length < 8 || password.length > 16) {
    throw new Error(FORM_ERROR.PASSWORD.LENGTH);
  }

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*?]).*$/;
  if (!passwordRegex.test(password)) {
    throw new Error(FORM_ERROR.PASSWORD.INVALID);
  }
};

export const validateNull = (value: string) => {
  if (!value) {
    throw new Error('필수 입력 항목입니다.');
  }
};
