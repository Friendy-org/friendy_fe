import { ReactNode } from 'react';
import TabBar from '@navigation/TabBar';
import { RootStackParamList } from '@customTypes/navigation';

import S from './style';

interface MainLayoutProps {
  children: ReactNode;
  location: keyof RootStackParamList;
}

export default function MainLayout({ children, location }: MainLayoutProps) {
  return (
    <S.MainContainer>
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <TabBar activeTab={location} />
    </S.MainContainer>
  );
}
