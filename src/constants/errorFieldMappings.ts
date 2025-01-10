import { FORM_ERROR } from './errorMessages';

const fieldMappings: Record<string, string> = {
  [FORM_ERROR.EMAIL.REQUIRED]: 'email',
  [FORM_ERROR.EMAIL.INVALID]: 'email',
  [FORM_ERROR.EMAIL.ALREADY_EXISTS]: 'email',
  [FORM_ERROR.NICKNAME.REQUIRED]: 'nickname',
  [FORM_ERROR.NICKNAME.LENGTH]: 'nickname',
  [FORM_ERROR.NICKNAME.ALREADY_EXISTS]: 'nickname',
  [FORM_ERROR.PASSWORD.REQUIRED]: 'password',
  [FORM_ERROR.PASSWORD.INVALID]: 'password',
  [FORM_ERROR.PASSWORD.LENGTH]: 'password',
  [FORM_ERROR.BIRTHDATE.REQUIRED]: 'birthDate',
};

export default fieldMappings;
