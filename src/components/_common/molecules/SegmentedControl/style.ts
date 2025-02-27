import styled from '@emotion/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.color.gray[500]};
  border-radius: 25px;
`;

const SegmentButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  position: relative;
  padding: 11px;
`;

const SelectButton = styled.View`
  position: absolute;
  top: -1;
  left: -1;
  right: -1;
  bottom: -1;

  background-color: ${({ theme }) => theme.color.primary[50]};
  border: 1px solid ${({ theme }) => theme.color.primary[800]};
  border-radius: 25px;
`;

const SegmentText = styled.Text<{ isSelected: boolean }>`
  ${({ theme, isSelected }) =>
    isSelected ? theme.font.common.regularAccent : theme.font.common.regular};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.primary[900] : theme.color.gray[700]};
  z-index: 1;
`;

const S = {
  Container,
  SegmentButton,
  SelectButton,
  SegmentText,
};

export default S;
