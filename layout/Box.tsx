import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { useComponentTheme } from "../Theme";

interface Props extends ViewProps {
    style?: ViewStyle;
}

export default function Box({ children, style, ...props }: Props) {
    const { theme } = useComponentTheme('Box');
    return <View {...props} style={{ ...theme.style, ...style }}>
        {children}
    </View>;
}