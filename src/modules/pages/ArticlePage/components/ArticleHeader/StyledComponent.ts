import styled from "styled-components";
import {ITheme} from "../../../../../app/theme/themeInterface";
import {Title} from "../../../../UIKit/Title/Title";

export const SArticleHeader = styled.div`
  background-color: ${({theme}: ITheme) => theme.colors.secondary};
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const SArticleHeaderTitle = styled(Title)`
  font-style: ${({theme}: ITheme) => theme.size.sizeMedium};
  color: #fff;
  margin-bottom: 32px;
`;

