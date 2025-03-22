import { END_POINTS } from '@constants/api';
import type MockAdapter from 'axios-mock-adapter';
import { signupResponse } from '../data/member/signupData';
import { resetPasswordResponse } from '../data/member/resetPasswordData';

export default function memberHandler(mock: MockAdapter) {
  mock.onPost(END_POINTS.MEMBER.SIGNUP).reply(200, signupResponse);

  mock.onPost(END_POINTS.MEMBER.RESET_PASSWORD).reply(200, resetPasswordResponse);
}
