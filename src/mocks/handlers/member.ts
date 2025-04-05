import type MockAdapter from 'axios-mock-adapter';
import { signupResponse } from '../data/member/signupData';
import { resetPasswordResponse } from '../data/member/resetPasswordData';
import { MOCK_ENDPOINTS } from '../mockEndpoints';
import { pathToRegex } from '../utils/mockApiHelper';
import { getMemberInfoResponse } from '../data/member/getMemberInfoData';
import { getMyPostListResponse } from '../data/member/getMyPostListData';

export default function memberHandler(mock: MockAdapter) {
  mock.onGet(pathToRegex(MOCK_ENDPOINTS.MEMBER.INFO)).reply(200, getMemberInfoResponse);

  mock.onGet(pathToRegex(MOCK_ENDPOINTS.MEMBER.MY_POST_LIST)).reply(200, getMyPostListResponse);

  mock.onPost(MOCK_ENDPOINTS.MEMBER.SIGNUP).reply(200, signupResponse);

  mock.onPost(MOCK_ENDPOINTS.MEMBER.RESET_PASSWORD).reply(200, resetPasswordResponse);
}
