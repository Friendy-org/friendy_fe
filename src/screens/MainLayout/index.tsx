import TabBar from '@navigation/TabBar';
import S from './style';
import { ReactNode } from 'react';
import { RootStackParamList } from 'src/types/NavigationTypes';

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
