import type MockAdapter from 'axios-mock-adapter';
import { loginResponse } from '../data/auth/loginData';
import { withdrawalResponse } from '../data/auth/withdrawalData';
import { reIssueResponse } from '../data/auth/reIssueData';
import { MOCK_ENDPOINTS } from '../mockEndpoints';

export default function authHandler(mock: MockAdapter) {
  mock.onPost(MOCK_ENDPOINTS.AUTH.LOGIN).reply(200, loginResponse);

  mock.onPost(MOCK_ENDPOINTS.AUTH.WITHDRAWAL).reply(200, withdrawalResponse);

  mock.onPost(MOCK_ENDPOINTS.AUTH.REISSUE).reply(200, reIssueResponse);
}
