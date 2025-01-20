import styled from '@emotion/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #d9d9d9;
`;

const InfoWrapper = styled.View`
  margin-left: 12px;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 2px;
`;

const Location = styled.Text`
  font-size: 10px;
  color: #000;
`;

const S = {
  Container,
  ProfileImage,
  InfoWrapper,
  Name,
  Location,
};

export default S;
