import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

interface Props extends ViewProps {
    space?: number;
    style?: ViewStyle
}

export default function VStack({ style, space = 30, children, ...props }: Props)
{
    return <View {...props} style={{ flexDirection: 'column', gap: space, ...style }}>
        {children}
    </View>;
}