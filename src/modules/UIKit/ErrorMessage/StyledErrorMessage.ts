import styled from "styled-components";

export const StyledErrorMessage = styled.p`
  color: ${({theme}) =>  theme.colors.errorColor};
  font-size: 14px;
  margin-top: 5px;
  transform: translateY(-10px);
`;