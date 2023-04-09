import styled, {css} from "styled-components";
import {ITheme} from "../../../../../app/theme/themeInterface";
import {ArticleCommentsBody} from "./ArticleCommentsBody";
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line";


export const commentWrapperStyles = css`
  margin: 0 auto;
  border: 1px solid #ccc;
  width: 70%;
  border-radius: 4px;
`;

export const commentBodyStyles = css`
  padding: 20px;
  font-size: ${({theme}: ITheme) => theme.size.sizeLight};
  color: ${({theme}: ITheme) => theme.colors.secondaryText};
`;

export const commentFooterStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
  border-top: 1px solid #e5e5e5;
  padding: 12px 20px;
  background-color: #f5f5f5;
`;

export const SArticleUserCommentsBlock = styled.div`
  padding: 24px 0;
`;


export const SArticleCommentForm = styled.form`
  ${commentWrapperStyles};
`

export const SArticleCommentTextarea = styled.textarea`
  ${commentBodyStyles};
  resize: none;
  min-height: 100px;
  width: 100%;

  &::placeholder {
    color: #ccc;
  }
`;

export const SArticleCommentFooter = styled.div`
  ${commentFooterStyles};
`;

export const SArticleCommentsBody = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const SCommentWrapper = styled.div`
  ${commentWrapperStyles};
`;
export const SCommentBody = styled.div`
  ${commentBodyStyles};
`;
export const SCommentFooter = styled.div`
  ${commentFooterStyles};
`;


export const SCommentDeleteButton = styled(RiDeleteBin6Line)`
  font-size: 16px;
  color: #333;
`

export const SCommentDeleteButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color .3s linear;
  padding: 5px;

  &:hover {
    background-color: #ccc;

    ${SCommentDeleteButton} {
      color: ${({theme}: ITheme) => theme.colors.primary};
    }
  }
`;

export const SShowMoreCommentsButton = styled.button`
  display: inline-block;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 3.2px;
  font-size: 14px;
  opacity: .8;
  color: #ccc;
  margin: 0 auto;
  border: 1px solid #ccc;
  transition: background-color .3s,color .3s linear;
  &:hover{
    background-color: #ccc;
    color:#fff;
  }
`;