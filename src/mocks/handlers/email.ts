import { END_POINTS } from '@constants/api';
import type MockAdapter from 'axios-mock-adapter';
import { sendCodeResponse } from '../data/email/sendCodeData';
import { verifyCodeResponse } from '../data/email/verifyCodeData';

export default function emailHandler(mock: MockAdapter) {
  mock.onPost(END_POINTS.EMAIL.SEND_CODE).reply(200, sendCodeResponse);

  mock.onPost(END_POINTS.EMAIL.VERIFY_CODE).reply(200, verifyCodeResponse);
}
