import React from "react";
import { Pressable, PressableProps, ViewStyle } from "react-native";
import Colors from "../Colors";
import Text from "./Text";

interface Props extends PressableProps {
    color?: keyof typeof Colors;
    variant?: 'solid' | 'outline' | 'ghost';
    disableShadow?: boolean;
    title?: string;
    style?: ViewStyle;
    leftElement?: React.JSX.Element;
    rightElement?: React.JSX.Element;
    children?: React.ReactNode;
}

export default function Button({ variant = 'solid', color = 'primary', disableShadow = false, title, style, leftElement, rightElement, children, ...props }: Props)
{
    const shadowConfig = !disableShadow && {
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    };

    return <Pressable {...props} style={({ pressed }) => ({
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
            gap: 10, paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10,
            userSelect: 'none',

            transform: [{ scale: pressed ? 0.95 : 1 }],
            opacity: pressed ? 0.5 : 1,

            ...(variant == 'solid' && {
                backgroundColor: Colors[color],
                ...shadowConfig,
            }),

            ...(variant == 'outline' && {
                borderColor: Colors[color],
                borderWidth: 1,
            }),

            ...style,
        })}
    >
        <>
        {leftElement}
        {title && <Text
            style={{
                fontSize: 15,
                ...(variant == 'solid' && { color: color == 'light' ? Colors.dark : Colors.white }),
                ...(variant != 'solid' && { color: Colors[color] }),
            }}>
                {title}
        </Text>}
        {rightElement}
        {children}
        </>
    </Pressable>;
}