import React from "react";
import { View as DefaultView, ViewProps, ViewStyle } from "react-native";

interface Props extends ViewProps {
    style?: ViewStyle;
}

export default function View({ style, children, ...props }: Props)
{
    return <DefaultView {...props} style={{ width: '100%', gap: 5, ...style }}>
        {children}
    </DefaultView>;
}