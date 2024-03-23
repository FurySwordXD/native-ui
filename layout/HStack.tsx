import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

interface Props extends ViewProps {
    space?: number;
    style?: ViewStyle
}

export default function HStack({ style, space = 15, children, ...props }: Props)
{
    return <View {...props} style={{ flexDirection: 'row', gap: space, alignItems: 'center', ...style }}>
        {children}
    </View>;
}