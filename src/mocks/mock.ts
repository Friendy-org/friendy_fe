import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import authHandler from './handlers/auth';
import emailHandler from './handlers/email';
import memberHandler from './handlers/member';
import postHandler from './handlers/post';
import commentHandler from './handlers/comment';
import uploadHandler from './handlers/upload';

export default function setupMockAPI() {
  const mock = new MockAdapter(axios, { delayResponse: 500 });

  authHandler(mock);
  emailHandler(mock);
  memberHandler(mock);
  postHandler(mock);
  commentHandler(mock);
  uploadHandler(mock);
}
