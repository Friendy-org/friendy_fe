import styled from '@emotion/native';

const AppContainer = styled.View`
    background-color: white;

    width: 100%;
    height: 100%;
`;

const Layout = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 70%;
    margin: auto;
`;

const Container = styled.View`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
`

const ImgLogo = styled.Image`
    width: 206px;
    height: 206px;
    border-radius: 103px;
    background-color: #dddddd;
`;

const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-top: 15px;
`;

const MarginedButton = styled.View<{ margin?: number }>`
    margin: ${props => props.margin ? props.margin : 0}px;
    width: 100%;
`;

const S = {
    AppContainer,
    Layout,
    ImgLogo,
    Container,
    Title,
    MarginedButton
};

export default S;