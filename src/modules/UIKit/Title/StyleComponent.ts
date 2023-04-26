import {ReactNode} from 'react';
import styled from "styled-components";
import {ITheme} from "../../../app/theme/themeInterface";

export interface IStyledTitle {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode,
    align?: 'left' | 'center' | 'right',
    color?: string,
    size?: string,
    weight?: string
}

export const Typography = styled.p.attrs((props: IStyledTitle) => ({
    variant: props.variant,
    align: props.align,
    color: props.color,
    size: props.size,
    weight: props.weight
}))`
  color: ${props => props.color || 'inherit'};
  font-weight: ${props => props.weight || 500};
  text-align: ${props => props.align || 'left'};
  line-height: 1.1;
  margin-bottom: 8px;
  font-size: ${props => props.size ? props.size : (
          (props: IStyledTitle) => {
            switch (props.variant) {
              case 'h1':
                return '40px';
              case 'h2':
                return '35px';
              case 'h3':
                return '30px';
              case 'h4':
                return '25px';
              case 'h5':
                return '20px';
              case 'h6':
                return '16px';
              default:
                return 'inherit';
            }
          }
  )};
  @media (${({theme}: ITheme) => theme.media.tablet}) {
    font-size: ${props => {
      switch (props.variant) {
        case 'h1':
          return '30px';
        case 'h2':
          return '25px';
        case 'h3':
          return '20px';
        case 'h4':
          return '18px';
        case 'h5':
          return '16px';
        case 'h6':
          return '14px';
        default:
          return 'inherit';
      }
    }}
`
