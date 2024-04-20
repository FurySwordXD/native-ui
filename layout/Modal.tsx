import React from "react";
import { Modal as DefaultModal, ModalProps, ViewStyle, Pressable } from "react-native";
import Box from "./Box";

interface Props extends ModalProps
{
    backdrop?: boolean;
    style?: ViewStyle;
}

export default function Modal({ visible, backdrop = true, style, animationType = 'fade', transparent = true, hardwareAccelerated = true, children, ...props }: Props)
{
    return <DefaultModal
        visible={visible}
        transparent={transparent}
        hardwareAccelerated={hardwareAccelerated}
        animationType={animationType}
        {...props}
    >
        <Box style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', ...style }}>
            <Pressable onPress={props.onRequestClose} style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
                <Box style={{ width: '100%', height: '100%', backgroundColor: visible && backdrop && 'rgba(0, 0, 0, 0.5)' }} />
            </Pressable>
            {children}
        </Box>
    </DefaultModal>;
}