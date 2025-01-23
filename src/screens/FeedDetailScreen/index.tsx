import PostCard from '@components/PostCard';
import { RouteProp } from '@react-navigation/native';
import MainLayout from '@screens/MainLayout';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RootStackParamList } from 'src/types/NavigationTypes';

interface FeedDetailScreenProps {
  route: RouteProp<RootStackParamList, 'FeedDetail'>;
}

export default function FeedDetailScreen({ route }: FeedDetailScreenProps) {
  const { postId } = route.params;
  const imageUrls = [
    'https://www.adobe.com/kr/creativecloud/photography/hub/features/roc/media_126f51234e424100112aecb4f61e26b3a2afc74d8.jpeg?width=750&format=jpeg&optimize=medium',
    'https://media.istockphoto.com/id/520700958/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%BD%83-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=',
    'https://media.istockphoto.com/id/157681198/ko/%EC%82%AC%EC%A7%84/%EB%AF%BC%EB%93%A4%EB%A0%88-seed.jpg?s=612x612&w=0&k=20&c=BtRA1Q24ICmHkRb6HS0tInJ1JQKAEiTm0dC1tBtfs5s=',
  ];

  const comments = Array.from({ length: 10 }, (_, index) => ({
    id: `comment-${index}`,
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
          />
        }
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </MainLayout>
  );
}
