export const LOGO_IMAGE = 'https://friendybucket.s3.us-east-2.amazonaws.com/defaultimages/logo.png' as const;
export const DEFAULT_PROFILE_IMAGE = 'https://friendybucket.s3.us-east-2.amazonaws.com/profile/image.png' as const;

export const PROFILE_VISIBILITY_OPTIONS = ['전체 공개', '비공개'] as const;

export const LOCATION_VISIBILITY_OPTIONS = ['전체', '팔로워', '비공개'] as const;

export const DROPDOWN_ITEMS = [
  {
    item: '선택 없음',
    color: 'gray',
    align: 'left',
  },
  {
    item: '버그',
    color: 'default',
    align: 'left',
  },
  {
    item: '계정 관련',
    color: 'default',
    align: 'left',
  },
] as const;

export const MYPOST_DROPDOWN_ITEMS = [
  {
    item: '게시글 수정',
    color: 'default',
    align: 'center',
  },
  {
    item: '게시글 삭제',
    color: 'tertiary',
    align: 'center',
  },
] as const;

export const POST_DROPDOWN_ITEMS = [
  {
    item: '알림 받지 않기',
    color: 'default',
    align: 'center',
  },
  {
    item: '신고',
    color: 'tertiary',
    align: 'center',
  },
] as const;

export const LIST_BUTTON_COMMON_ITEMS = [
  {
    item: '검색 기록 초기화',
    color: 'gray',
    onPress: () => {
      console.log('검색 기록 초기화 실행');
    },
  },
  {
    item: '추천 알고리즘 초기화',
    color: 'default',
    onPress: () => {
      console.log('추천 알고리즘 초기화 실행');
    },
  },
] as const;

export const LIST_BUTTON_USER_ITEMS = [
  {
    item: '로그아웃',
    color: 'gray',
    onPress: () => {
      console.log('로그아웃 실행');
    },
  },
  {
    item: '회원 탈퇴',
    color: 'default',
    onPress: () => {
      console.log('회원 탈퇴 실행');
    },
  },
] as const;
