import HeaderBar from '@navigation/HeaderBar';
import MainLayout from '@screens/MainLayout';
import { Text } from 'react-native';

export default function FeedScreen() {
  return (
    <MainLayout location='Feed'>
      <HeaderBar showEditButton={true} />
      <Text>FeedScreen</Text>
    </MainLayout>
  );
}
