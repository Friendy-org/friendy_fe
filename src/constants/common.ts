export const DEFAULT_PROFILE_IMAGE =
  'https://friendybucket.s3.us-east-2.amazonaws.com/profile/image.png' as const;

export const PROFILE_VISIBILITY_OPTIONS = ['전체 공개', '비공개'] as const;

export const LOCATION_VISIBILITY_OPTIONS = ['전체', '팔로워', '비공개'] as const;

export const DROPDOWN_ITEMS = [
  {
    item: '선택 없음',
    color: 'gray',
  },
  {
    item: '버그',
    color: 'default',
  },
  {
    item: '계정 관련',
    color: 'default',
  },
] as const;
