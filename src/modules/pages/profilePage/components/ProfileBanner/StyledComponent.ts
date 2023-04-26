import styled from "styled-components";
import {SArticleUserEditButton} from "../../../../UIKit/ArticleUserButton/StyledComponent";

export const SProfileBannerWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 16px;
  background: #f3f3f3;
  margin-bottom: 32px;
`;

export const SProfileBannerInner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

export const SProfileBannerLogo = styled.img`
  height: 100px;
  max-width: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const SProfileBannerEditButton = styled(SArticleUserEditButton)`
  align-self: flex-end;
  margin-right: 20%;
`
