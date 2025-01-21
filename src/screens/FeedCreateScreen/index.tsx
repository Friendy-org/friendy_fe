import ImageUploader from '@components/ImageUploader';
import MainLayout from '@screens/MainLayout';
import { Text } from 'react-native';

export default function FeedCreateScreen() {
  return (
    <MainLayout location='FeedCreate'>
      <ImageUploader />
    </MainLayout>
  );
}
