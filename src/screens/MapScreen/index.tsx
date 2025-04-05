import HeaderBar from '@navigation/HeaderBar';
import MainLayout from '@screens/MainLayout';
import { Text } from 'react-native';

export default function MapScreen() {
  return (
    <MainLayout location='Map'>
      <HeaderBar showLogo />
      <Text>MapScreen</Text>
    </MainLayout>
  );
}
