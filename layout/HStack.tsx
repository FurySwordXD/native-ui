import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import Theme from "../Theme";

interface Props extends ViewProps {
    space?: number;
    style?: ViewStyle
}

Theme.HStack = {
    style: {
        alignItems: 'center'
    }
}

export default function HStack({ style, space = 15, children, ...props }: Props)
{
    return <View {...props} style={{ flexDirection: 'row', columnGap: space, ...Theme.HStack.style, ...style }}>
        {children}
    </View>;
}