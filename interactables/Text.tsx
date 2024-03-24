import React from "react";
import { Text, TextStyle, TextProps, Platform } from "react-native";
import Colors from "../Colors";

interface Props extends TextProps {
    variant?: 'default' | 'heading' | 'key' | 'subtitle' | 'primary' | 'error';
    style?: TextStyle;
}

export default function CustomText({ variant = 'default', style, children, ...props }: Props)
{
    const variantStyle: TextStyle = {};
    switch (variant) {
        case 'heading':
            variantStyle.color = Colors.black;
            variantStyle.fontWeight = '600';
            variantStyle.fontSize = 18;
            break;
        case 'key':
            variantStyle.color = Colors.black;
            variantStyle.fontWeight = '400';
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

    return <Text style={{ fontSize: 13, ...variantStyle, ...style }} {...props}>{children}</Text>
}