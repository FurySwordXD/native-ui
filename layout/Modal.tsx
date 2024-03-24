import React from "react";
import { Modal as DefaultModal, ModalProps } from "react-native";

interface Props extends ModalProps
{

}

export default function Modal({ visible, animationType = 'fade', hardwareAccelerated = true, children, ...props }: Props)
{
    return <DefaultModal
        visible={visible}
        hardwareAccelerated={hardwareAccelerated}
        animationType={animationType}
        {...props}
    >
        {children}
    </DefaultModal>;
}