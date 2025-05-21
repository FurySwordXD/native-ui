import React from "react";
import { View as DefaultView, ViewProps, ViewStyle } from "react-native";
import { useComponentTheme } from "../Theme";

interface Props extends ViewProps {
    style?: ViewStyle;
}

export default function View({ style, children, ...props }: Props) {
    const { theme } = useComponentTheme('View');

    return <DefaultView {...props} style={{ ...theme.style, ...style }}>
        {children}
    </DefaultView>;
}