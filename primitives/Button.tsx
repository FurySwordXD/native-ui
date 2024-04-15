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
    children?: string | React.JSX.Element;
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

    },
    variantsWithProps: {
        'solid': ({ color, disableShadow }: Props) => ({
            backgroundColor: Colors[color],
            ...(!disableShadow && shadowConfig)
        }),
        'outline': ({ color }: Props) => ({
            borderWidth: 1,
            borderColor: Colors[color],
        }),
        'ghost': () => ({}),
        'link': () => ({
            paddingVertical: undefined,
            paddingHorizontal: undefined,
        })
    }
};



export default function Button({ variant = 'solid', color = 'primary', disableShadow = false, title, style, leftElement, rightElement, children, ...props }: Props)
{
    return <Pressable {...props}
        style={({ pressed }) => ({
            flexDirection: 'row',
            userSelect: Platform.OS == 'web' ? 'none' : undefined,
            alignItems: 'center', justifyContent: 'center',
            gap: 10, borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 24,

            transform: [{ scale: pressed ? 0.97 : 1 }],
            opacity: pressed ? 0.5 : 1,

            ...Theme.Button.styleWithProps?.({ variant, color, disableShadow }),
            ...Theme.Button.style,

            ...Theme.Button.variantsWithProps?.[variant]?.({ variant, color, disableShadow }),
            ...Theme.Button.variants?.[variant],

            ...style
        })}
    >
        <>
        {leftElement}
        {(title || typeof children == 'string')  &&
        <Text style={{
                fontSize: 15,
                ...(variant == 'solid' && { color: (color == 'light' || color == 'white') ? Colors.dark : Colors.white }),
                ...(variant != 'solid' && { color: Colors[color] }),
            }}
        >
            {title || children}
        </Text>}
        {rightElement}
        {typeof children != 'string' && children}
        </>
    </Pressable>;
}