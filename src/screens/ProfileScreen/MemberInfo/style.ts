import styled from '@emotion/native';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const MemberInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const FollowInfo = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FollowCount = styled.Text`
  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const FollowText = styled.Text`
  ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.gray[800]};
`;

const S = {
  Container,
  MemberInfoContainer,
  FollowInfo,
  FollowCount,
  FollowText,
};

export default S;
