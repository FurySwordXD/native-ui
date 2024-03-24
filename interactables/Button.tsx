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

export default function CustomButtom({ variant = 'solid', color = 'primary', disableShadow = false, title, style, leftElement, rightElement, children, ...props }: Props)
{
    const shadowConfig = variant == 'solid' && !disableShadow && {
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    };

    return <Pressable {...props} style={({ pressed }) => ({
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
            gap: 10, paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10,
            backgroundColor: variant == 'solid' && Colors[color],
            borderColor: variant == 'outline' && Colors[color],
            borderWidth: variant == 'outline' && 1,
            transform: [{ scale: pressed ? 0.95 : 1 }],
            opacity: pressed ? 0.5 : 1,
            userSelect: 'none',
            ...shadowConfig,
            ...style,
        })}
    >
        <>
        {leftElement}
        {title && <Text
            style={{ fontSize: 14, fontWeight: '400',
                color: variant != 'solid' ? Colors[color] : color == 'light' ? Colors.dark : Colors.white
            }}>
                {title}
        </Text>}
        {rightElement}
        {children}
        </>
    </Pressable>;
}