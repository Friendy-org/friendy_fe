import styled from '@emotion/native';

const AppContainer = styled.View`
    background-color: white;
    display: flex;
    flex-direction: column-reverse;

    width: 100%;
    height: 100%;
`;

const Layout = styled.View`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 65%;

    margin-left: 10%;
    margin-bottom: 80px;

    justify-content: space-between;
    align-items: start;
`

const Section = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const S = {
    AppContainer,
    Layout,
    Section
}

export default S;