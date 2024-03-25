import React from "react";
import { Modal as DefaultModal, ModalProps, Pressable } from "react-native";
import View from "./View";

interface Props extends ModalProps
{
    backdrop?: boolean;
}

export default function Modal({ visible, backdrop = true, animationType = 'fade', transparent = true, hardwareAccelerated = true, children, ...props }: Props)
{
    return <DefaultModal
        visible={visible}
        transparent={transparent}
        hardwareAccelerated={hardwareAccelerated}
        animationType={animationType}
        {...props}
    >
        <Pressable onPress={props.onRequestClose} style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>
            <View style={{ width: '100%', height: '100%', backgroundColor: visible && backdrop && 'rgba(0, 0, 0, 0.5)' }}>
                {children}
            </View>
        </Pressable>
    </DefaultModal>;
}