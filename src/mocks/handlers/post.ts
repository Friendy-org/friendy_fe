import { END_POINTS } from '@constants/api';
import type MockAdapter from 'axios-mock-adapter';
import { getPostListResponse } from '../data/post/getPostListData';
import { createPostResponse } from '../data/post/createPostData';

export default function postHandler(mock: MockAdapter) {
  mock.onGet(END_POINTS.POST.LIST).reply(200, getPostListResponse);

  mock.onPost(END_POINTS.POST.CREATE).reply(200, createPostResponse);
}
