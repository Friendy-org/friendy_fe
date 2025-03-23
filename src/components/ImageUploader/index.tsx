import React from 'react';
import { FlatList } from 'react-native';

import useSelectImage from '@hooks/utils/useSelectImage';

import SelectedImage from './SelectedImage';
import AddImage from './AddImage';

interface ImageUploaderProps {
  images: string[];
  setImages: (images: string[]) => void;
}

export default function ImageUploader({ images, setImages }: ImageUploaderProps) {
  const { selectAndUpload, isLoading } = useSelectImage();

  const selectImage = () => {
    selectAndUpload((uploadedUrl: string) => {
      setImages([...images, uploadedUrl]);
    });
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <FlatList
      data={[...images, null]}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) =>
        item ? (
          <SelectedImage
            key={index}
            uri={item}
            index={index}
            onRemove={removeImage}
            isLoading={isLoading}
          />
        ) : (
          <AddImage onPress={selectImage} />
        )
      }
      keyExtractor={(_, index) => index.toString()}
    />
  );
}
