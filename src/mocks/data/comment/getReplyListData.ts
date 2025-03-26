export const getReplyListResponse = {
  code: 1000,
  message: '답글 목록 조회에 성공했습니다.',
  result: {
    comments: [
      {
        id: 2,
        content: '프렌디답글내용1',
        createdAt: '2025-03-23T15:30:45',
        likeCount: 0,
        authorResponse: {
          id: 1,
          nickname: 'bokSungKim',
          profileImageUrl:
            'https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp',
        },
      },
      {
        id: 1,
        content: '프렌디답글내용2',
        createdAt: '2025-03-23T15:30:45',
        likeCount: 0,
        authorResponse: {
          id: 1,
          nickname: 'bokSungKim',
          profileImageUrl:
            'https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp',
        },
      },
    ],
    hasNext: false,
    lastReplyId: 1,
    replyCount: 0,
  },
};
