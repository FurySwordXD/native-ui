import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import Colors from "../Colors";

interface Props extends ViewProps {
    style?: ViewStyle;
}

export default function Card({ style, children, ...props }: Props)
{
    const shadowConfig = {
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    };

    return <View {...props}
        style={{
            backgroundColor: Colors.white, borderRadius: 10,
            paddingHorizontal: 20, paddingVertical: 10,
            // ...shadowConfig,
            ...style
        }}
    >
        {children}
    </View>;
}