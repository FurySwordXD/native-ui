import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { useComponentTheme } from "../Theme";

interface Props extends ViewProps {
    space?: number;
    style?: ViewStyle
}

export default function HStack({ style, space = 15, children, ...props }: Props) {
    const { theme } = useComponentTheme('HStack');
    return <View {...props} style={{ flexDirection: 'row', columnGap: space, ...theme.style, ...style }}>
        {children}
    </View>;
}