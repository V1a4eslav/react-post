import styled from "styled-components";

export interface IFormButton {
    type?: string,
    children: string,
    disabled?: boolean,
}

export const StyledFormButton = styled.button.attrs((props: IFormButton) => ({
    type: props.type || 'submit'
}))`
  padding: 12px 24px;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${props => props.color || '#fff'};
  align-self: flex-end;
  font-weight: 700;
  transition: all 0.3s linear;
  border-radius: 7px;

  &:hover {
    box-shadow: 0px 0px 5px ${({theme}) => theme.colors.primary};
    background-color: #fff;
    color: ${({theme}) => theme.colors.primary};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${({theme}) => theme.colors.translucentPrimary};
  }
`