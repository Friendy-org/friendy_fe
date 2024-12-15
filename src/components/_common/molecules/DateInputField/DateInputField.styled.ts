import styled from '@emotion/native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.Text``;

const ChangeDateButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 34px;
  background-color: rgba(120, 120, 128, 0.12);
  border-radius: 6px;
`;

const ButtonText = styled.Text`
  color: #007aff;
  font-size: 16px;
`;
const S = {
  Wrapper,
  Label,
  ChangeDateButton,
  ButtonText,
};

export default S;
