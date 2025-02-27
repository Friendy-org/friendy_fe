import styled from '@emotion/native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 3px;

  width: 100%;
  height: 56px;
`;

const PinInput = styled.TextInput<{ hasValue: boolean; isFocus: boolean }>`
  flex: 1;

  ${({ theme }) => theme.font.heading[300]};
  color: ${({ theme }) => theme.color.gray[800]};
  border: 1px solid
    ${({ hasValue, isFocus, theme }) =>
      hasValue || isFocus ? theme.color.secondary[400] : theme.color.gray[600]};
  border-radius: 16px;
  text-align: center;
`;

const S = {
  Wrapper,
  PinInput,
};

export default S;
