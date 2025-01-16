import styled from '@emotion/native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  margin: 15px 0;
`;

const PinInput = styled.TextInput<{ hasValue: boolean; isFocus: boolean }>`
  flex: 0.15;
  border-width: 1px;
  border-radius: 17px;
  border-color: ${({ hasValue, isFocus }) => (hasValue || isFocus ? '#38A5CD' : '#717d96')};
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`;

const S = {
  Wrapper,
  PinInput,
};

export default S;
