import { END_POINTS } from '@constants/api';
import type MockAdapter from 'axios-mock-adapter';
import { uploadImageResponse } from '../data/upload/uploadImageData';

export default function uploadHandler(mock: MockAdapter) {
  mock.onPost(END_POINTS.UPLOAD.IMAGE).reply(200, uploadImageResponse);
}
