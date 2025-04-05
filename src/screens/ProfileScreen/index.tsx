import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';

import useGetMemberInfo from '@hooks/member/useGetMemberInfo';
import useGetMyPostList from '@hooks/member/useGetMyPostList';

import { STACK_NAME } from '@constants/navigation';

import { NavigationProp, RootStackParamList } from '@customTypes/navigation';
import { PostTumbnailData } from '@customTypes/post';

import MainLayout from '@screens/MainLayout';
import Loading from '@screens/Loading';

import HeaderBar from '@navigation/HeaderBar';

import PostImage from '@components/_common/atoms/PostImage';
import MemberInfo from './MemberInfo';

import S from './style';

interface ProfileScreenProps {
  route: RouteProp<RootStackParamList, 'Profile'>;
}

export default function ProfileScreen({ route }: ProfileScreenProps) {
  const navigation = useNavigation<NavigationProp>();
  const { memberId } = route.params;

  const { data: memberData, isLoading: isMemberLoading } = useGetMemberInfo(String(memberId));
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isMyPostListLoading,
  } = useGetMyPostList(String(memberId));

  if (isMemberLoading || isMyPostListLoading) {
    return (
      <MainLayout location='Profile'>
        <HeaderBar
          showUpdateButton
          showSetting
        />
        <Loading />
      </MainLayout>
    );
  }

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  const renderItem = ({ item }: { item: PostTumbnailData }) => (
    <S.Thumbnail onPress={() => navigation.navigate(STACK_NAME.FEED_DETAIL, { postId: item.id })}>
      <PostImage
        size='fillContainer'
        shape='default'
        imageUrl={item.thumbnail}
      />
    </S.Thumbnail>
  );

  return (
    <MainLayout location='Profile'>
      <HeaderBar
        showUpdateButton
        showSetting
      />

      <FlatList
        data={posts}
        numColumns={3}
        columnWrapperStyle={{ gap: 2 }}
        contentContainerStyle={{ gap: 2 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={<MemberInfo {...memberData} />}
        ListHeaderComponentStyle={{ marginBottom: 30 }}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator
              size='small'
              color='#1BD15E'
            />
          ) : null
        }
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) fetchNextPage();
        }}
        onEndReachedThreshold={0.2}
      />
    </MainLayout>
  );
}
