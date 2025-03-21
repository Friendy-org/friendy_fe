import uploadApi from '@api/domain/upload';
import { ImageData } from '@customTypes/upload';
import { useMutation } from '@tanstack/react-query';

export default function useUploadImage() {
  const uploadImageMutate = useMutation({
    mutationFn: async ({ uri, fileName, type }: ImageData) => {
      const formData = new FormData();
      formData.append('image', {
        uri,
        name: fileName,
        type,
      } as unknown as Blob);

      const result = await uploadApi.image(formData);
      return result;
    },
  });

  return {
    uploadImageMutate: uploadImageMutate.mutate,
    isLoading: uploadImageMutate.isPending,
  };
}
