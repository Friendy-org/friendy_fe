import styled from '@emotion/native';

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #ffffff;
  padding: 0 28px;
`;

const ButtonWrapper = styled.View`
  min-width: 25px;
  min-height: 25px;
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const S = {
  HeaderContainer,
  Logo,
  ButtonWrapper,
};

export default S;
