import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import PostCard from '@components/PostCard';
import HeaderBar from '@navigation/HeaderBar';
import MainLayout from '@screens/MainLayout';
import useGetPostList from '@hooks/post/useGetPostList';
import { PostData } from '@customTypes/post';
import Loading from '@screens/Loading';

export default function FeedScreen() {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetPostList();

  if (isLoading) {
    return (
      <MainLayout location='Feed'>
        <HeaderBar showUpdateButton />
        <Loading />
      </MainLayout>
    );
  }

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  const renderItem = ({ item }: { item: PostData }) => <PostCard {...item} />;

  return (
    <MainLayout location='Feed'>
      <HeaderBar showUpdateButton />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.2}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator
              size='large'
              color='#1BD15E'
            />
          ) : null
        }
        showsVerticalScrollIndicator={false}
      />
    </MainLayout>
  );
}
