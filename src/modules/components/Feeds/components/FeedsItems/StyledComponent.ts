import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {ITheme} from "../../../../../app/theme/themeInterface";

export const StyledFeedsWrapper = styled.div`
  flex: 0 0 75%;
  padding-right: 15px;
  padding-left: 15px;
`

export const StyledFeedsNav = styled.div`
  display: flex;
`

export const StyledFeedsLink = styled(NavLink)`
  border-bottom: 2px solid transparent;
  padding: 8px 16px;
  color: #aaa;
  margin-bottom: 0;

  &.active {
    color: ${({theme}: ITheme) => theme.colors.primary};
    border-color: ${({theme}: ITheme) => theme.colors.primary};
  }
`

export const StyledFeedsContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`