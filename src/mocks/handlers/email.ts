import type MockAdapter from 'axios-mock-adapter';
import { sendCodeResponse } from '../data/email/sendCodeData';
import { verifyCodeResponse } from '../data/email/verifyCodeData';
import { MOCK_ENDPOINTS } from '../mockEndpoints';

export default function emailHandler(mock: MockAdapter) {
  mock.onPost(MOCK_ENDPOINTS.EMAIL.SEND_CODE).reply(200, sendCodeResponse);

  mock.onPost(MOCK_ENDPOINTS.EMAIL.VERIFY_CODE).reply(200, verifyCodeResponse);
}
