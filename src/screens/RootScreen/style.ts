import styled from '@emotion/native';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 135px;

  background-color: ${({ theme }) => theme.color.gray[50]};

  width: 100%;
  height: 100%;
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
  font-size: 22px;
  font-weight: bold;
  margin-top: 15px;
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const S = {
  Container,
  AppInfo,
  Logo,
  Title,
  ButtonWrapper,
};

export default S;
