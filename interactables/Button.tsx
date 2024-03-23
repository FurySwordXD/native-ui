import React from "react";
import { Pressable, Text, PressableProps, ViewStyle } from "react-native";
import Colors from "../Colors";

interface Props extends PressableProps {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'warning' | 'dark' | 'light' | 'transparent';
    title?: string;
    style?: ViewStyle;
    leftElement?: React.JSX.Element;
    rightElement?: React.JSX.Element;
    children?: React.ReactNode;
}

export default function CustomButtom({ variant = 'primary', title, style, leftElement, rightElement, children, ...props }: Props)
{
    const shadowConfig = variant != 'transparent' && {
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    };

    return <Pressable {...props} style={({ pressed }) => ({
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
            gap: 10, paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10,
            backgroundColor: variant != 'transparent' && Colors[variant],
            transform: [{ scale: pressed ? 0.95 : 1 }],
            opacity: pressed ? 0.5 : 1,
            userSelect: 'none',
            ...shadowConfig,
            ...style,
        })}
    >
        <>
        {leftElement}
        {title && <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.white }}>{title}</Text>}
        {rightElement}
        {children}
        </>
    </Pressable>;
}