import type MockAdapter from 'axios-mock-adapter';
import { getPostListResponse } from '../data/post/getPostListData';
import { createPostResponse } from '../data/post/createPostData';
import { getPostDetailResponse } from '../data/post/getPostDetailData';
import { MOCK_ENDPOINTS } from '../mockEndpoints';
import { pathToRegex } from '../utils/mockApiHelper';
import { updatePostResponse } from '../data/post/updatePostData';

export default function postHandler(mock: MockAdapter) {
  mock.onGet(MOCK_ENDPOINTS.POST.LIST).reply(200, getPostListResponse);

  mock.onGet(pathToRegex(MOCK_ENDPOINTS.POST.DETAIL)).reply(200, getPostDetailResponse);

  mock.onPost(MOCK_ENDPOINTS.POST.CREATE).reply(200, createPostResponse);

  mock.onPost(MOCK_ENDPOINTS.POST.UPDATE).reply(200, updatePostResponse);
}
