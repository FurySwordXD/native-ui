import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { useComponentTheme } from "../Theme";

interface Props extends ViewProps {
    space?: number;
    style?: ViewStyle
}

export default function VStack({ style, space = 15, children, ...props }: Props) {
    const { theme } = useComponentTheme('VStack');

    return <View {...props} style={{ flexDirection: 'column', rowGap: space, ...theme.VStack.style, ...style }}>
        {children}
    </View>;
}