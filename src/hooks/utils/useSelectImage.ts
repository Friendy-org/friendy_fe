import { launchImageLibrary } from 'react-native-image-picker';
import useUploadImage from '@hooks/upload/useUploadImage';

export default function useSelectImage() {
  const { uploadImageMutate, isLoading } = useUploadImage();

  const selectAndUpload = async (onSuccess: (uploadedUrl: string) => void) => {
    const result = await launchImageLibrary({ mediaType: 'photo', quality: 1 });

    const asset = result.assets?.[0];
    if (!asset?.uri || !asset?.fileName || !asset?.type) return;

    const file = {
      uri: asset.uri,
      fileName: asset.fileName,
      type: asset.type,
    };

    uploadImageMutate(file, {
      onSuccess: (url: string) => {
        onSuccess(url);
      },
    });
  };

  return {
    selectAndUpload,
    isLoading,
  };
}
