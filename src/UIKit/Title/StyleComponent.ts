import {ReactNode} from 'react';
import styled, {css} from "styled-components";

export interface IStyledTitle {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode,
    align?: 'left' | 'center' | 'right',
    color?: string,
}

export const Typography = styled.p.attrs((props: IStyledTitle) => ({
    variant: props.variant,
    align: props.align,
    color: props.color,
}))`
  color: ${props => props.color || 'inherit'};
  font-weight: 500;
  text-align: ${props => props.align || 'left'};
  line-height: 1.1;
  margin-bottom: 8px;
  ${(props: IStyledTitle) => {
    switch (props.variant) {
      case 'h1':
        return css`
          font-size: 40px;`;
      case 'h2':
        return css`
          font-size: 35px;`;
      case 'h3':
        return css`
          font-size: 30px;`;
      case 'h4':
        return css`
          font-size: 25px;`;
      case 'h5':
        return css`
          font-size: 20px;`;
      case 'h6':
        return css`
          font-size: 16px;`;
      default:
        return css`
          font-size: inherit;
        `
    }
  }}
`;