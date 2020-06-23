import Styled from "styled-components";

const MainWrapper = Styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: #c9ffc4;
border: 2px solid green;
margin: 10px 4px 0px 16px;
border-radius: 50px;
width: 80%;
`;

const CheckUpdateText = Styled.Text`
font-size: 16px;
display: flex;
flex-direction: row;
justify-content: space-between;
color: black;
font-weight: bold;
letter-spacing: 0.5px;
padding: 12px;
`;

const LoaderWrapper = Styled.View`
padding-right: 10px;
display: flex;
justify-content: center;
`;

export { MainWrapper, CheckUpdateText, LoaderWrapper };
