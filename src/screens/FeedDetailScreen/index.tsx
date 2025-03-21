import PostCard from '@components/PostCard';
import { RouteProp } from '@react-navigation/native';
import MainLayout from '@screens/MainLayout';
import { FlatList } from 'react-native-gesture-handler';
import { RootStackParamList } from '@customTypes/navigation';
import S from './style';
import CommentList from './CommentList';
import InputField from '@components/_common/molecules/InputField';
import { useState } from 'react';
import IconButton from '@components/_common/molecules/IconButton';

interface FeedDetailScreenProps {
  route: RouteProp<RootStackParamList, 'FeedDetail'>;
}

export default function FeedDetailScreen({ route }: FeedDetailScreenProps) {
  const { postId } = route.params;
  const [commentInput, setCommentInput] = useState('');

  const imageUrls = [
    'https://www.adobe.com/kr/creativecloud/photography/hub/features/roc/media_126f51234e424100112aecb4f61e26b3a2afc74d8.jpeg?width=750&format=jpeg&optimize=medium',
    'https://media.istockphoto.com/id/520700958/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%BD%83-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=',
    'https://media.istockphoto.com/id/157681198/ko/%EC%82%AC%EC%A7%84/%EB%AF%BC%EB%93%A4%EB%A0%88-seed.jpg?s=612x612&w=0&k=20&c=BtRA1Q24ICmHkRb6HS0tInJ1JQKAEiTm0dC1tBtfs5s=',
  ];

  const comments = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    text: `Comment ${index + 1}`,
  }));

  return (
    <MainLayout location='Feed'>
      <FlatList
        ListHeaderComponent={
          <PostCard
            postId={postId}
            name='복성김'
            location='대한민국'
            imageUrls={imageUrls}
            content='게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용 게시글 내용'
            date='2024.10.12'
            like='905'
            comment='422'
            share='99'
            isExpand={true}
            commentIcon={false}
          />
        }
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <S.CommentWrapper>
            <CommentList
              commentId={item.id}
              authorName='김복성'
              content='나 블핑 로제인데 이거 개추 눌렀다 🔥🔥'
              like='193'
              comment='422'
              reply={3}
            />
          </S.CommentWrapper>
        )}
      />
      <S.CommentInputWrapper>
        <S.InputWrapper>
          <InputField
            value={commentInput}
            onChange={setCommentInput}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <IconButton
            iconName='send'
            iconSize={26}
          />
        </S.ButtonWrapper>
      </S.CommentInputWrapper>
    </MainLayout>
  );
}
