import styled from "styled-components";
import {ITheme} from "../../../../../app/theme/themeInterface";
import {StyledTagItems} from "../../../homePage/components/FeedsTags/StyledFeedsTags";
import {TagItem} from "../../../homePage/components/FeedsTags/TagItem";

export const SArticleInnerBody = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 32px 0;
`;

export const SArticleBodyText = styled.p`
  font-size: ${({theme}: ITheme) => theme.size.sizeSemiLight};
  line-height: 1.2;
  color: ${({theme}:ITheme)=>theme.colors.secondaryText};
`;

export const SArticleBodyTagItems = styled(StyledTagItems)`
margin-top: 32px;
`;

export const SArticleTagItem = styled(TagItem)`
  background-color: transparent;
  border: 1px solid #ddd;
  color: #aaa;
  transition: all .3s linear;
  &:hover{
    background-color:#aaa;
    color: #fff;
  }
`;

export const SArticleUserButtonsBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;
