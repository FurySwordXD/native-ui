import React from "react";
import { Platform, Pressable, PressableProps, ViewStyle } from "react-native";
import Colors from "../Colors";
import Text from "./Text";
import Theme from "../Theme";

interface Props extends PressableProps {
    color?: keyof typeof Colors;
    variant?: 'solid' | 'outline' | 'ghost' | 'link';
    disableShadow?: boolean;
    title?: string;
    style?: ViewStyle;
    leftElement?: React.JSX.Element;
    rightElement?: React.JSX.Element;
    children?: React.ReactNode;
}

const shadowConfig = {
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
};

Theme.Button = {
    style: {
        flexDirection: 'row',
        userSelect: Platform.OS == 'web' ? 'none' : undefined,
        alignItems: 'center', justifyContent: 'center',
        gap: 10, borderRadius: 10,
    },
    variants: {
        'solid': ({ color, disableShadow }: Props) => ({
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: Colors[color],
            ...(!disableShadow && shadowConfig)
        }),
        'outline': ({ color }: Props) => ({
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderWidth: 1,
            borderColor: Colors[color],
        }),
        'ghost': {
            paddingVertical: 12,
            paddingHorizontal: 24,
        },
        'link': {}
    }
};



export default function Button({ variant = 'solid', color = 'primary', disableShadow = false, title, style, leftElement, rightElement, children, ...props }: Props)
{
    return <Pressable {...props}
        style={({ pressed }) => ({

            transform: [{ scale: pressed ? 0.97 : 1 }],
            opacity: pressed ? 0.5 : 1,

            ...evaluateStyle(Theme.Button.style)({ variant, color, disableShadow }),
            ...evaluateStyle(Theme.Button.variants[variant])({ variant, color, disableShadow }),

            ...style
        })}
    >
        <>
        {leftElement}
        {title &&
        <Text style={{
                fontSize: 15,
                ...(variant == 'solid' && { color: (color == 'light' || color == 'white') ? Colors.dark : Colors.white }),
                ...(variant != 'solid' && { color: Colors[color] }),
            }}
        >
            {title}
        </Text>}
        {rightElement}
        {children}
        </>
    </Pressable>;
}