import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import Theme from "../Theme";

interface Props extends ViewProps {
    space?: number;
    style?: ViewStyle
}

Theme.VStack = {};

export default function VStack({ style, space = 15, children, ...props }: Props)
{
    return <View {...props} style={{ flexDirection: 'column', rowGap: space, ...Theme.VStack.style, ...style }}>
        {children}
    </View>;
}