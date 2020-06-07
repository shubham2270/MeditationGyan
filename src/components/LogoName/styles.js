import styled from "styled-components";

import typography from "src/constants/typography";

const AppNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  color: #ffff;
`;

const Name = styled.Text`
  font-size: ${typography.heading};
  margin-left: 10px;
  font-size: 20px;
  color: ${(props) => props.textColor};
`;

const Logo = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 50px;
`;

const AppNameMainWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
`;

const ThemeText = styled.Text`
  font-weight: bold;
  color: ${(props) => props.textColor};
`;

export { AppNameWrapper, Name, Logo, AppNameMainWrapper, ThemeText };
