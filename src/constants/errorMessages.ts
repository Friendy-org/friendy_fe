export const FORM_ERROR = {
  EMAIL: {
    REQUIRED: '이메일이 입력되지 않았습니다.',
    INVALID: '이메일 형식으로 입력해주세요.',
    ALREADY_EXISTS: '이미 가입된 이메일입니다.',
  },
  NICKNAME: {
    REQUIRED: '닉네임이 입력되지 않았습니다.',
    LENGTH: '닉네임은 2~20자 사이로 입력해주세요.',
    ALREADY_EXISTS: '닉네임이 이미 존재합니다.',
  },
  PASSWORD: {
    REQUIRED: '비밀번호가 입력되지 않았습니다.',
    INVALID: '숫자, 영문자, 특수문자(~!@#$%^&*?)를 포함해야 합니다.',
    LENGTH: '비밀번호는 8~16자 사이로 입력해주세요.',
  },
  BIRTHDATE: {
    REQUIRED: '생년월일이 입력되지 않았습니다.',
  },
};
