import type MockAdapter from 'axios-mock-adapter';
import { MOCK_ENDPOINTS } from '../mockEndpoints';
import { pathToRegex } from '../utils/mockApiHelper';
import { getCommentListResponse } from '../data/comment/getCommentListData';
import { getReplyListResponse } from '../data/comment/getReplyListData';

export default function commentHandler(mock: MockAdapter) {
  mock.onGet(pathToRegex(MOCK_ENDPOINTS.COMMENT.LIST)).reply(200, getCommentListResponse);

  mock.onGet(pathToRegex(MOCK_ENDPOINTS.COMMENT.REPLY_LIST)).reply(200, getReplyListResponse);
}
