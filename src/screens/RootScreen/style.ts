import styled from '@emotion/native';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 135px;

  background-color: ${({ theme }) => theme.color.gray[50]};

  width: 100%;
  height: 100%;
  padding: 40px;
`;

const AppInfo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
`;

const Logo = styled.Image`
  width: 206px;
  height: 206px;
  border-radius: 103px;
`;

const Title = styled.Text`
  ${({ theme }) => theme.font.heading[400]};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 100%;
`;

const S = {
  Container,
  AppInfo,
  Logo,
  Title,
  ButtonWrapper,
};

export default S;
