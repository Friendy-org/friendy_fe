import styled from '@emotion/native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

const DropdownWrapper = styled.View`
  position: relative;
`;

const Dropdown = styled.View`
  position: absolute;
  top: 80%;
  left: -400%;
  right: 0;
  z-index: 2;
`;

const Overlay = styled.Pressable`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const S = {
  Container,
  DropdownWrapper,
  Dropdown,
  Overlay,
};

export default S;
