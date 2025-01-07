import styled from '@emotion/native';

const Layout = styled.View`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    margin: auto;
    justify-content: space-between;
    align-items: start;
`

const Title = styled.Text`
    margin: 0px 10px;
    font-size: 24px;
`;

const Section = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const S = {
    Layout,
    Title,
    Section
}

export default S;