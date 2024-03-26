import React from "react";
import { Text as DefaultText, TextStyle, TextProps, Platform } from "react-native";
import Colors from "../Colors";

interface Props extends TextProps {
    variant?: 'default' | 'heading' | 'key' | 'subtitle' | 'primary' | 'error';
    style?: TextStyle;
}

export default function Text({ variant = 'default', style, children, ...props }: Props)
{
    const variantStyle: TextStyle = {};
    switch (variant) {
        case 'heading':
            variantStyle.color = Colors.black;
            variantStyle.fontWeight = '600';
            variantStyle.fontSize = 20;
            break;
        case 'key':
            variantStyle.color = Colors.dark;
            variantStyle.fontWeight = '600';
            variantStyle.fontSize = 15;
            break;
        case 'subtitle':
            variantStyle.color = Colors.grey;
            break;
        case 'error':
            variantStyle.color = Colors.error;
            break;
        default:
            variantStyle.color = Colors.dark;
            break;
    }

    return <DefaultText style={{ fontSize: 13, fontWeight: '500', ...variantStyle, ...style }} {...props}>{children}</DefaultText>
}