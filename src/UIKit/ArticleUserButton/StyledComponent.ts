import styled, {css} from "styled-components";
import {ITheme} from "../../app/theme/themeInterface";
import {Link} from "react-router-dom";

export const ArticleUserButtonStyles = css`
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: background-color .3s, color .3s, liner;
  padding: 4px 8px;
  border-radius: 3.2px;
  font-size: ${({theme}: ITheme) => theme.size.sizeExtraLight};
  opacity: .8;
  column-gap: 4px;
`;

export const SArticleUserEditButton = styled(Link)`
  ${ArticleUserButtonStyles};
  border: 1px solid #ccc;
  color: #ccc;

  &:hover {
    background-color: #ccc;
    opacity: 1;
    span,svg{
      color: #fff;
    }
  }
`;

export const SArticleUserDeleteButton = styled.button`
  ${ArticleUserButtonStyles};
  border: 1px solid ${({theme}: ITheme) => theme.colors.errorColor};
  color: ${({theme}: ITheme) => theme.colors.errorColor};

  &:hover {
    background-color: ${({theme}: ITheme) => theme.colors.errorColor};
    opacity: 1;
    span,svg{
      color: #fff;
    }
  }
`;

export const SArticleUserFollowButton = styled.button`
  ${ArticleUserButtonStyles};
  border: 1px solid #ccc;
  color: #ccc;

  &[disabled]{
    pointer-events: none;
    cursor: auto;
  }
  
  &:hover {
    background-color: #ccc;
    opacity: 1;
    span,svg{
    color: #fff;
    }
  }

  &.active:not([disabled]){
    background-color: #ccc;
    span,svg{
      color: ${({theme}:ITheme)=>theme.colors.secondaryText};
    }
  }
`;

export const SArticleUserFavButton = styled.button`
  ${ArticleUserButtonStyles};
  border: 1px solid ${({theme}: ITheme) => theme.colors.primary};
  color: ${({theme}: ITheme) => theme.colors.primary};

  &.active,
  &:hover {
    background-color: ${({theme}: ITheme) => theme.colors.primary};
    opacity: 1;
    span,svg{
      color: #fff;
    }
  }
`