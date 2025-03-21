import styled from '@emotion/native';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const ToastContainer = styled.View<{ visible: boolean }>`
  position: absolute;
  bottom: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  background-color: ${({ theme }) => theme.color.gray[500]};
  border-radius: 16px;
  padding: 16px 20px;

  overflow: hidden;
  animation: ${({ visible }) => (visible ? slideIn : slideOut)} 0.5s ease-out forwards;
`;

const ToastContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const Text = styled.Text`
  ${({ theme }) => theme.font.common.medium};
  color: ${({ theme }) => theme.color.gray[50]};
`;

const S = {
  ToastContainer,
  ToastContent,
  Text,
};

export default S;
