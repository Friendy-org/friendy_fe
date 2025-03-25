export const getCommentListResponse = {
  code: 1000,
  message: '댓글 목록 조회에 성공했습니다.',
  result: {
    comments: [
      {
        id: 4,
        content: '프렌디댓글내용4',
        createdAt: '2025-03-23T15:30:45',
        likeCount: 0,
        replyCount: 2,
        authorResponse: {
          id: 1,
          nickname: 'bokSungKim',
          profileImageUrl:
            'https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp',
        },
      },
      {
        id: 3,
        content: '프렌디댓글내용3',
        createdAt: '2025-03-23T15:30:45',
        likeCount: 0,
        replyCount: 0,
        authorResponse: {
          id: 1,
          nickname: 'bokSungKim',
          profileImageUrl:
            'https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp',
        },
      },
      {
        id: 2,
        content: '프렌디댓글내용1',
        createdAt: '2025-03-23T15:30:45',
        likeCount: 0,
        replyCount: 4,
        authorResponse: {
          id: 1,
          nickname: 'bokSungKim',
          profileImageUrl:
            'https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp',
        },
      },
      {
        id: 1,
        content: '프렌디댓글내용2',
        createdAt: '2025-03-23T15:30:45',
        likeCount: 0,
        replyCount: 0,
        authorResponse: {
          id: 1,
          nickname: 'bokSungKim',
          profileImageUrl:
            'https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp',
        },
      },
    ],
    hasNext: false,
    lastCommentId: 1,
  },
};
