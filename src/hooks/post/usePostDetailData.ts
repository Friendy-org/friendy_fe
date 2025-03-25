import useGetPostDetail from '@hooks/post/useGetPostDetail';
import useGetCommentList from '@hooks/comment/useGetCommentList';

export default function usePostDetailData(postId: string) {
  const postQuery = useGetPostDetail(postId);
  const commentQuery = useGetCommentList(postId);
  const comments = commentQuery.data?.pages.flatMap((page) => page.comments) ?? [];

  return {
    postQuery,
    commentQuery,
    comments,
  };
}
