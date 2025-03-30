import type MockAdapter from 'axios-mock-adapter';
import { MOCK_ENDPOINTS } from '../mockEndpoints';
import { pathToRegex } from '../utils/mockApiHelper';
import { getCommentListResponse } from '../data/comment/getCommentListData';
import { getReplyListResponse } from '../data/comment/getReplyListData';
import { createCommentResponse } from '../data/comment/createCommentData';
import { createReplyResponse } from '../data/comment/createReplyData';

export default function commentHandler(mock: MockAdapter) {
  mock.onGet(pathToRegex(MOCK_ENDPOINTS.COMMENT.LIST)).reply(200, getCommentListResponse);

  mock.onGet(pathToRegex(MOCK_ENDPOINTS.COMMENT.REPLY_LIST)).reply(200, getReplyListResponse);

  mock.onPost(MOCK_ENDPOINTS.COMMENT.CREATE).reply(200, createCommentResponse);

  mock.onPost(MOCK_ENDPOINTS.COMMENT.REPLY_CREATE).reply(200, createReplyResponse);
}
