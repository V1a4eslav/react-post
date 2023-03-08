import React, {ReactNode} from 'react';
import {AnimatePresence} from "framer-motion";
import {ButtonClose, ModalContent, StyledModal} from "./StyledComponent";

interface IModal {
    isOpen: boolean,
    onCloseModal: () => void,
    children: ReactNode
}

export const Modal = ({isOpen, onCloseModal, children}: IModal) => (
    <AnimatePresence>
        {isOpen && (
            <StyledModal
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}>
                <ModalContent
                    initial={{y: 50}}
                    animate={{y: 0}}
                    exit={{y: 50}}
                    transition={{duration: .7}}
                >
                    <ButtonClose onClick={onCloseModal}>X</ButtonClose>
                    {children}
                </ModalContent>
            </StyledModal>)}
    </AnimatePresence>
);

