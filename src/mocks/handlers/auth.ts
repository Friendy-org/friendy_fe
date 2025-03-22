import { END_POINTS } from '@constants/api';
import type MockAdapter from 'axios-mock-adapter';
import { loginResponse } from '../data/auth/loginData';
import { withdrawalResponse } from '../data/auth/withdrawalData';
import { reIssueResponse } from '../data/auth/reIssueData';

export default function authHandler(mock: MockAdapter) {
  mock.onPost(END_POINTS.AUTH.LOGIN).reply(200, loginResponse);

  mock.onPost(END_POINTS.AUTH.WITHDRAWAL).reply(200, withdrawalResponse);

  mock.onPost(END_POINTS.AUTH.REISSUE).reply(200, reIssueResponse);
}
