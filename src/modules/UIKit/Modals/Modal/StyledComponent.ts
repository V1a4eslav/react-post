import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledModal = styled(motion.div)`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export const ModalContent = styled(motion.div)`
  max-width: 500px;
  width: 90%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  line-height: 1;
  color: #000;
  background-color: transparent;
  border: none;
  cursor: pointer;
`