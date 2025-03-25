import type MockAdapter from 'axios-mock-adapter';
import { signupResponse } from '../data/member/signupData';
import { resetPasswordResponse } from '../data/member/resetPasswordData';
import { MOCK_ENDPOINTS } from '../mockEndpoints';

export default function memberHandler(mock: MockAdapter) {
  mock.onPost(MOCK_ENDPOINTS.MEMBER.SIGNUP).reply(200, signupResponse);

  mock.onPost(MOCK_ENDPOINTS.MEMBER.RESET_PASSWORD).reply(200, resetPasswordResponse);
}
