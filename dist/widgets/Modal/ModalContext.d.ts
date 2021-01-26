import React from "react";
import { ModalProps } from "./types";
interface ModalsContext extends ModalProps {
    onPresent: (node: React.ReactNode, key?: string) => void;
}
export declare const Context: React.Context<ModalsContext>;
declare const ModalProvider: React.FC;
export default ModalProvider;
