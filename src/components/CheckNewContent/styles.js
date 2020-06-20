import Styled from "styled-components";

const MainWrapper = Styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
background: #c9ffc4;
margin-top: 16px;
border: 2px solid green;
margin: 16px 4px;
border-radius: 4px;
`;

const CheckUpdateText = Styled.Text`
font-size: 16px;
color: black;
font-weight: bold;
letter-spacing: 0.5px;
padding: 16px;
`;

const LoaderWrapper = Styled.View`
padding-right: 10px;
display: flex;
justify-content: center;
`;

export { MainWrapper, CheckUpdateText, LoaderWrapper };
