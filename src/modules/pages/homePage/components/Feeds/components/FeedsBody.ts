import styled from "styled-components";
import {ITheme} from "../../../../../../app/theme/themeInterface";

export const FeedsBody = styled.div`
  display: flex;
  margin: 32px  -15px;
  @media(${({theme}:ITheme)=>theme.media.tablet}){
    flex-direction: column;
    margin: 0;
    padding: 15px;
  }
`

