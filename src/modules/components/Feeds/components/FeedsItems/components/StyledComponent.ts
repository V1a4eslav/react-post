import styled from "styled-components";
import {Link} from "react-router-dom";
import {ITheme} from "../../../../../../app/theme/themeInterface";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart";


export const SFeedPreview = styled.div`
  border-top: 1px solid rgba(0, 0, 0, .1);
  padding-top: ${({theme}: ITheme) => theme.size.sizeNormal};
  padding-bottom: ${({theme}: ITheme) => theme.size.sizeNormal};
`

export const SFeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const SFeedUser = styled.div`
  display: flex;
  column-gap: 10px;
`
export const SFeedUserLogo = styled(Link)`
  display: inline-block;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  //background-color: #994299;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: contain;
  }
`
export const SFeedUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`
export const SFeedUserName = styled(Link).attrs((props) => ({
    color: props.color
}))`
  color: ${props => props.color || (({theme}: ITheme) => theme.colors.primary)};
  font-size: ${({theme}: ITheme) => theme.size.sizeLight};

  &:hover {
    text-decoration: underline;
  }

`
export const SFeedUserDate = styled.p`
  color: #bbb;
  font-weight: 300;
  font-size: ${({theme}: ITheme) => theme.size.sizeThink};
`

export const SIconAiOutlineHeart = styled(AiFillHeart)`
  color: ${({theme}: ITheme) => theme.colors.primary};
  font-size: ${({theme}: ITheme) => theme.size.sizeExtraLight};
`

export const SLikeCount = styled.span`
  color: ${({theme}: ITheme) => theme.colors.primary};
  font-size: ${({theme}: ITheme) => theme.size.sizeExtraLight};
`

export const SFeedLikeContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid ${({theme}: ITheme) => theme.colors.primary};
  padding: 4px 8px;
  border-radius: 10%;
  transition: background-color .3s linear;

  &.active,
  &:hover {
    background-color: ${({theme}: ITheme) => theme.colors.primary};

    & ${SIconAiOutlineHeart},
    & ${SLikeCount} {
      color: #fff;
    }
  }
`

export const SFeedBody = styled(Link)`
  display: inline-block;
  margin-bottom: 15px;
`
export const SFeedTitle = styled.h2`
  font-size: ${({theme}: ITheme) => theme.size.sizeNormal};
  font-weight: 600;
  margin-bottom: 3px;
  line-height: 1.1;
`
export const SFeedText = styled.p`
  font-weight: 300;
  font-size: ${({theme}: ITheme) => theme.size.sizeLight};
  color: #999;
  line-height: 1.3rem;
`
export const SFeedFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SFeedFooterButton = styled(Link)`
  font-size: ${({theme}: ITheme) => theme.size.sizeThink};
  font-weight: 300;
  color: #bbb;

  &:hover {
    text-decoration: underline;
  }
`
export const SFeedFooterTags = styled.ul`
  display: flex;
  column-gap: 5px;
  flex-wrap: wrap;
`
export const SFeedFooterTagItem = styled.li`
  font-size: ${({theme}: ITheme) => theme.size.sizeThink};
  font-weight: 300;
  color: #bbb;
  border: 1px solid #ddd;
  padding: 4px 8px;
  border-radius: 10px;
`