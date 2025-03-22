import React, { useState } from 'react';

import { MemberData } from '@customTypes/member';

import { MYPOST_DROPDOWN_ITEMS, POST_DROPDOWN_ITEMS } from '@constants/common';

import AuthorInfo from '@components/_common/molecules/AuthorInfo';
import IconButton from '@components/_common/molecules/IconButton';
import ItemList from '@components/_common/molecules/ItemList';

import S from './style';

interface PostCardHeaderProps {
  me: boolean;
  authorResponse: MemberData;
  location: string;
}

export default function PostCardHeader({ me, authorResponse, location }: PostCardHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item: string) => {
    setIsOpen(false);
    if (item === MYPOST_DROPDOWN_ITEMS[0].item) {
      console.log(item);
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
          content={location}
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
