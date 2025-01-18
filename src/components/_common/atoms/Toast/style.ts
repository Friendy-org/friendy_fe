import styled from '@emotion/native';

const ToastContainer = styled.View<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  width: 100%;
  height: 46px;
  background-color: #d9d9d9;
`;

const Message = styled.Text`
  font-weight: 700;
`;

const S = {
  ToastContainer,
  Message,
};

export default S;
