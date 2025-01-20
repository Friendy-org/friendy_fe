import styled from '@emotion/native';

const TextWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Content = styled.Text`
  flex-shrink: 1;
  font-size: 13px;
`;

const ReadMoreText = styled.Text`
  color: #333333;
  font-size: 11px;
  margin-left: 1px;
`;

const S = {
  TextWrapper,
  Content,
  ReadMoreText,
};

export default S;
