import { API_URL } from '@env';

export const BASE_URL = API_URL;

const BASE_PATH = {
  AUTH: '/auth',
  MEMBER: '/member',
  EMAIL: '/email',
  POST: '/posts',
  COMMENT: '/comments',
  FOLLOW: '/follow',
};

export const END_POINTS = {
  AUTH: {
    LOGIN: `${BASE_PATH.AUTH}/login`,
    LOGOUT: `${BASE_PATH.AUTH}/logout`,
    WITHDRAWAL: `${BASE_PATH.AUTH}/withdrawal`,
    REISSUE: `${BASE_PATH.AUTH}/token/reissue`,
  },
  MEMBER: {
    SIGNUP: '/signup',
    RESET_PASSWORD: '/password',
    INFO: (memberId: string) => `${BASE_PATH.MEMBER}/${memberId}`,
  },
  EMAIL: {
    SEND_CODE: `${BASE_PATH.EMAIL}/send-code`,
    VERIFY_CODE: `${BASE_PATH.EMAIL}/verify-code`,
  },
  POST: {
    CREATE: BASE_PATH.POST,
    UPDATE: (postId: string) => `${BASE_PATH.POST}/${postId}`,
    DELETE: (postId: string) => `${BASE_PATH.POST}/${postId}`,
    DETAIL: (postId: string) => `${BASE_PATH.POST}/${postId}`,
    LIST: `${BASE_PATH.POST}/list`,
  },
  COMMENT: {
    CREATE: BASE_PATH.COMMENT,
    UPDATE: (commentId: string) => `${BASE_PATH.COMMENT}/${commentId}`,
    LIST: (postId: string) => `${BASE_PATH.COMMENT}/list/${postId}`,
    REPLY_CREATE: `${BASE_PATH.COMMENT}/reply`,
    REPLY_UPDATE: (replyId: string) => `${BASE_PATH.COMMENT}/reply/${replyId}`,
    REPLY_LIST: (commentId: string) => `${BASE_PATH.COMMENT}/reply/list/${commentId}`,
  },
  FOLLOW: {
    APPLY: (targetId: string) => `${BASE_PATH.FOLLOW}/${targetId}`,
    UNFOLLOW: (targetId: string) => `${BASE_PATH.FOLLOW}/${targetId}`,
    FOLLOWING_LIST: (targetId: string) => `${BASE_PATH.FOLLOW}/following/${targetId}`,
    FOLLOWER_LIST: (targetId: string) => `${BASE_PATH.FOLLOW}/follower/${targetId}`,
  },
  UPLOAD: {
    IMAGE: '/file/upload',
  },
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_CODE = {
  EXPIRED_TOKEN: 1102,
  INVALID_SIGNATURE: 1103,
  UNSUPPORTED_TOKEN: 1104,
  INVALID_TOKEN: 1105,
  TOKEN_ERROR: 1106,
  EXTRACTING_ERROR: 1107,
} as const;

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';
export const MEMBER_ID_KEY = 'MEMBER_ID';
