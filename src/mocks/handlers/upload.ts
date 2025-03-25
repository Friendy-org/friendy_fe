import type MockAdapter from 'axios-mock-adapter';
import { uploadImageResponse } from '../data/upload/uploadImageData';
import { MOCK_ENDPOINTS } from '../mockEndpoints';

export default function uploadHandler(mock: MockAdapter) {
  mock.onPost(MOCK_ENDPOINTS.UPLOAD.IMAGE).reply(200, uploadImageResponse);
}
