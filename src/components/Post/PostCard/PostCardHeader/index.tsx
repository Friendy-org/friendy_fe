import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { MemberData } from '@customTypes/member';
import { NavigationProp } from '@customTypes/navigation';
import { PostGetUpdateData } from '@customTypes/post';

import { MYPOST_DROPDOWN_ITEMS, POST_DROPDOWN_ITEMS } from '@constants/common';
import { STACK_NAME } from '@constants/navigation';

import AuthorInfo from '@components/_common/molecules/AuthorInfo';
import IconButton from '@components/_common/molecules/IconButton';
import ItemList from '@components/_common/molecules/ItemList';

import S from './style';

interface PostCardHeaderProps {
  me: boolean;
  authorResponse: MemberData;
  postData: PostGetUpdateData;
}

export default function PostCardHeader({ me, authorResponse, postData }: PostCardHeaderProps) {
  const navigation = useNavigation<NavigationProp>();
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item: string) => {
    setIsOpen(false);
    if (item === MYPOST_DROPDOWN_ITEMS[0].item) {
      navigation.navigate(STACK_NAME.POST_UPDATE, { postData });
    } else if (item === MYPOST_DROPDOWN_ITEMS[1].item) {
      console.log(item);
    } else if (item === POST_DROPDOWN_ITEMS[0].item) {
      console.log(item);
    } else if (item === POST_DROPDOWN_ITEMS[1].item) {
      console.log(item);
    }
  };

  return (
    <>
      {isOpen && <S.Overlay onPress={() => setIsOpen(false)} />}

      <S.Container>
        <AuthorInfo
          size='md'
          {...authorResponse}
          content={postData.location}
        />
        <S.DropdownWrapper>
          <IconButton
            iconName='more-vertical'
            size='md'
            color='gray'
            onPress={handleDropdown}
          />
          {isOpen && (
            <S.Dropdown>
              <ItemList
                items={me ? MYPOST_DROPDOWN_ITEMS : POST_DROPDOWN_ITEMS}
                onItemSelect={handleSelect}
              />
            </S.Dropdown>
          )}
        </S.DropdownWrapper>
      </S.Container>
    </>
  );
}
