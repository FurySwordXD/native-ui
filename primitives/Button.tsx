import React from "react";
import { Platform, Pressable, PressableProps, ViewStyle, StyleSheet } from "react-native";
import Colors from "../Colors";
import Text from "./Text";
import { useComponentTheme } from "../Theme";
import View from "../layout/View";

interface Props extends PressableProps {
    color?: string;
    textColor?: string;
    variant?: 'solid' | 'outline' | 'ghost' | 'link';
    disableShadow?: boolean;
    title?: string;
    style?: ViewStyle;
    leftElement?: React.JSX.Element;
    rightElement?: React.JSX.Element;
    children?: string | React.JSX.Element;
}


export default function Button({ variant = 'solid', color = Colors.primary, textColor, disableShadow = false, title, style, leftElement, rightElement, children, ...props }: Props) {
    const { theme } = useComponentTheme('Button');

    return <Pressable {...props}
        style={({ pressed }) => ({
            flexDirection: 'row', overflow: 'hidden',
            userSelect: Platform.OS == 'web' ? 'none' : undefined,
            alignItems: 'center', justifyContent: 'center',
            gap: 10, borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,

            transform: [{ scale: pressed ? 0.97 : 1 }],
            opacity: pressed ? 0.5 : 1,

            ...theme.styleWithProps?.({ variant, color, disableShadow }),
            ...theme.style,

            ...theme.variantsWithProps?.[variant]?.({ variant, color, disableShadow }),
            ...theme.variants?.[variant],

            ...style
        })}
    >
        <>
            {leftElement}
            {(title || typeof children == 'string') &&
                <Text variant="key"
                    style={{
                        ...(variant == 'solid' && { color: textColor || Colors.white }),
                        ...(variant != 'solid' && { color: textColor || color }),
                    }}
                >
                    {title || children}
                </Text>}
            {typeof children != 'string' && children}
            {rightElement}
            {props.disabled && <View style={{ ...StyleSheet.absoluteFillObject, width: '1000%', height: '1000%', backgroundColor: `${Colors.greyScale[4]}50` }} />}
        </>
    </Pressable>;
}