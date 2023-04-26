import styled from "styled-components";
import {ITheme} from "../../../app/theme/themeInterface";

export const SUserButtonsBody = styled.div`
  display: flex;
  column-gap: 24px;
  @media (${({theme}: ITheme) => theme.media.tablet}) {
    flex-direction: column;
    row-gap: 12px;
  }
`;

export const SUserButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;