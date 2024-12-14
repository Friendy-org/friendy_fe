import styled from '@emotion/native';

const Wrapper = styled.View`
  display: flex;
  width: 100%;
`;

const Label = styled.Text`
  width: 100%;
`;

const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ResendLink = styled.Text`
  color: #38a5cd;
  text-decoration: underline;
`;

const Timer = styled.Text``;

const S = {
  Wrapper,
  Label,
  InfoWrapper,
  ResendLink,
  Timer,
};

export default S;
