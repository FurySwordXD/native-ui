import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { useComponentTheme } from "../Theme";

interface Props extends ViewProps {
    style?: ViewStyle;
}

export default function Card({ style, children, ...props }: Props) {
    const { theme } = useComponentTheme('Card');

    return <View {...props}
        style={{
            ...theme.style,
            ...style
        }}
    >
        {children}
    </View>;
}