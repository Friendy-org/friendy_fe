import styled from '@emotion/native';

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #1bd15d;
  border-radius: 25px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const S = {
  Button,
  ButtonText,
};

export default S;
