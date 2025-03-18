import ValidationError from '@utils/errors/ValidationError';
import { FORM_ERROR } from '@constants/errorMessages';
import { isEmptyString } from './common';

const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*?]).*$/,
};

const isValidEmail = (email: string) => regex.email.test(email);

const isValidPassword = (password: string) => regex.password.test(password);

export const validateEmail = {
  onBlur: (email: string) => {
    if (isEmptyString(email)) {
      throw new ValidationError({ inputName: 'email', message: FORM_ERROR.EMAIL.REQUIRED });
    }

    if (!isValidEmail(email)) {
      throw new ValidationError({ inputName: 'email', message: '이메일을 확인해 주세요.' });
    }
  },
};

export const validateNickname = {
  onBlur: (nickname: string) => {
    if (isEmptyString(nickname)) {
      throw new ValidationError({ inputName: 'nickname', message: FORM_ERROR.NICKNAME.REQUIRED });
    }

    if (nickname.length < 2 || nickname.length > 20) {
      throw new ValidationError({ inputName: 'nickname', message: FORM_ERROR.NICKNAME.LENGTH });
    }
  },

  onChange: (nickname: string) => {
    if (nickname.length < 2 || nickname.length > 20) {
      throw new ValidationError({ inputName: 'nickname', message: FORM_ERROR.NICKNAME.LENGTH });
    }
  },
};

export const validatePassword = {
  onBlur: (password: string) => {
    if (isEmptyString(password)) {
      throw new ValidationError({ inputName: 'password', message: FORM_ERROR.PASSWORD.REQUIRED });
    }

    if (password.length < 8 || password.length > 16) {
      throw new ValidationError({ inputName: 'password', message: FORM_ERROR.PASSWORD.LENGTH });
    }

    if (!isValidPassword(password)) {
      throw new ValidationError({ inputName: 'password', message: FORM_ERROR.PASSWORD.INVALID });
    }
  },

  onChange: (password: string) => {
    if (password.length < 8 || password.length > 16) {
      throw new ValidationError({ inputName: 'password', message: FORM_ERROR.PASSWORD.LENGTH });
    }
  },
};
