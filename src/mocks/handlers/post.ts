import type MockAdapter from 'axios-mock-adapter';
import { getPostListResponse } from '../data/post/getPostListData';
import { createPostResponse } from '../data/post/createPostData';
import { getPostDetailResponse } from '../data/post/getPostDetailData';
import { MOCK_ENDPOINTS } from '../mockEndpoints';
import { pathToRegex } from '../utils/mockApiHelper';

export default function postHandler(mock: MockAdapter) {
  mock.onGet(MOCK_ENDPOINTS.POST.LIST).reply(200, getPostListResponse);

  mock.onPost(MOCK_ENDPOINTS.POST.CREATE).reply(200, createPostResponse);
}
