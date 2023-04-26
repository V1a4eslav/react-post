import styled from "styled-components";
import {StyledLink} from "../ViewLinks/StyleComponent";
import {ITheme} from "../../../app/theme/themeInterface";

export const SFooter = styled.footer`
  background-color: #f3f3f3;
  padding: 16px 0;
`;

export const SFooterBody = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SFooterLogo = styled(StyledLink)`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
`;

export const SFooterText = styled.p`
  font-size: ${({theme}:ITheme)=>theme.size.sizeThink};
  font-weight: 300;
  color: #bbb;
`