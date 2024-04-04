import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import Theme from "../Theme";

interface Props extends ViewProps
{
    style?: ViewStyle;
}

Theme.Box = {}

export default function Box({ children, style, ...props }: Props)
{
    return <View {...props} style={{ ...Theme.Box.style, ...style }}>
        {children}
    </View>;
}