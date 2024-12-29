import styled from '@emotion/native';
import Button from '../../components/_common/atoms/Button/Button';

const Layout = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 60%;
    margin: auto;
`;

const Container = styled.View`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
`

const imgLogo = styled.Image`
    width: 206px;
    height: 206px;
    border-radius: 50%;
    background-color: #dddddd;
`;

const title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-top: 20px;
`;

const myButton = styled(Button)<{ marginBottom?: number }>`
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0}px;
`;

const S = {
    Layout,
    imgLogo,
    Container,
    title,
    myButton
};

export default S;