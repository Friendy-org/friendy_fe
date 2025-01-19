import styled from '@emotion/native';

const IconButtonWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconButton = styled.View``;

const Label = styled.Text<{ color?: string }>`
  font-size: 12px;
  color: ${({ color }) => color || '#000000'};
  margin-top: 4px;
`;

const S = {
  IconButtonWrapper,
  IconButton,
  Label,
};

export default S;
