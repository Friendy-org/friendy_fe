import styled from '@emotion/native';
import { TouchableOpacity } from 'react-native';

const CommentContainer = styled.View`
  display: flex;
  justify-content: center;
  border: 1px solid #b0b0b0;
  border-radius: 28px;
  margin: 6px 14px;
  padding: 10px 20px 10px 8px;
  min-height: 56px;
`;

const TextWrapper = styled(TouchableOpacity)`
  margin: 5px;
`;

const ReadMoreText = styled.Text`
  color: #333333;
  font-size: 8px;
  text-align: center;
`;

const ReplyContainer = styled.View`
  display: flex;
  margin-left: 18px;
  gap: 17px;
`;

const Divider = styled.View`
  height: 0.3px;
  background-color: #b0b0b0;
  margin: 12px 0;
`;

const S = {
  CommentContainer,
  TextWrapper,
  ReadMoreText,
  ReplyContainer,
  Divider,
};

export default S;
