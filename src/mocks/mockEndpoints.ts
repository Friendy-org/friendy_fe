export const MOCK_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    WITHDRAWAL: '/auth/withdrawal',
    REISSUE: '/auth/token/reissue',
  },
  MEMBER: {
    SIGNUP: '/signup',
    RESET_PASSWORD: '/password',
    INFO: '/member/:memberId',
  },
  EMAIL: {
    SEND_CODE: '/email/send-code',
    VERIFY_CODE: '/email/verify-code',
  },
  POST: {
    CREATE: '/posts',
    UPDATE: '/posts/:postId',
    DELETE: '/posts/:postId',
    DETAIL: '/posts/:postId',
    LIST: '/posts/list',
  },
  COMMENT: {
    CREATE: '/comments',
    UPDATE: '/comments/:commentId',
    LIST: '/comments/list/:postId',
    REPLY_CREATE: '/comments/reply',
    REPLY_UPDATE: '/comments/reply/:replyId',
    REPLY_LIST: '/comments/reply/list/:commentId',
  },
  FOLLOW: {
    APPLY: '/follow/:targetId',
    UNFOLLOW: '/follow/:targetId',
    FOLLOWING_LIST: '/follow/following/:targetId',
    FOLLOWER_LIST: '/follow/follower/:targetId',
  },
  UPLOAD: {
    IMAGE: '/file/upload',
  },
} as const;
