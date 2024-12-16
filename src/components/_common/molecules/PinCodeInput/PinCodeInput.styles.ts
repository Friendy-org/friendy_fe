import styled from '@emotion/native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 6px 0 15px 0;
`;

const PinInput = styled.TextInput<{ hasValue: boolean; isFocus: boolean }>`
  width: 49px;
  height: 56px;
  border-width: 1px;
  border-radius: 17px;
  border-color: ${({ hasValue, isFocus }) =>
    hasValue || isFocus ? '#38A5CD' : '#717d96'};
`;

const S = {
  Wrapper,
  PinInput,
};

export default S;
