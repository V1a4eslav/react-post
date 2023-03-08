import styled from "styled-components";
import {FormEvent, ReactNode} from "react";
import {motion} from "framer-motion";

export interface IFormProps {
    children?: ReactNode;
    name: string,
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void,
}

export const StyledForm = styled(motion.form)`
  max-width: 540px;
  color: ${({color}) => color
          ? color
          : ({theme}) => theme.colors.text};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`