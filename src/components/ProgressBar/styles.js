import styled from "styled-components";

const ProgressContainer = styled.View`
  width: 200px;
  height: 20px;
  border-radius: 50px;
  background-color: #ffffff;
  margin-top: 10px;
`;

const ProgressFill = styled.View`
  width: ${(props) => props.fill}%;
  height: 20px;
  border-radius: 50px;
  background-color: #ffcf40;
`;

export { ProgressContainer, ProgressFill };
