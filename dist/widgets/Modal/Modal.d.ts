import React from "react";
import { ModalProps } from "./types";
interface Props extends ModalProps {
    title: string;
}
declare const Modal: React.FC<Props>;
export default Modal;
