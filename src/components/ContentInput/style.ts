import styled from '@emotion/native';

const ContentInput = styled.TextInput`
  width: 100%;
  min-height: 130px;
  border: 1px solid #9a9a9a;
  border-radius: 8px;
  padding: 11px 16px;
`;

const NormalText = styled.Text`
  font-size: 13px;
  color: #000;
`;

const HashtagText = styled.Text`
  font-size: 14px;
  color: #000;
  background-color: #caf5da;
  border-radius: 5px;
`;

const S = {
  ContentInput,
  NormalText,
  HashtagText,
};

export default S;
