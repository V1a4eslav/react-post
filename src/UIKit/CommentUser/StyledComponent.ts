import styled from "styled-components";
import {
    SFeedUserLogo
} from "../../modules/components/Feeds/components/FeedsItems/components/StyledComponent";
import {ITheme} from "../../app/theme/themeInterface";
import {Link} from "react-router-dom";

export const SCommentUser = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const SCommentUserLogo = styled(SFeedUserLogo)`
  flex: 0 0 auto;
`;

export const SCommentUserInfo = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

export const SCommentUserName = styled(Link)`
  color: ${({theme}: ITheme) => theme.colors.primary};
  font-size: ${({theme}: ITheme) => theme.size.sizeLight};
`

export const SCommentUserDate = styled.p`
  transform: translateY(1.5px);
  color: #bbb;
  font-weight: 300;
  font-size: ${({theme}: ITheme) => theme.size.sizeThink};
`