import styled from '@emotion/native';

const AddImageButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px ${({ theme }) => theme.color.gray[700]} dashed;
  border-radius: 8px;
`;

const S = {
  AddImageButton,
};

export default S;
