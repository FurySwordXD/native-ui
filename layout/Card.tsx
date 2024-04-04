import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import Colors from "../Colors";
import Theme from "../Theme";

interface Props extends ViewProps {
    style?: ViewStyle;
}

Theme.Card = {
    style: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 20,
    }
};

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

            ...Theme.Card.style,
            // ...shadowConfig,
            ...style
        }}
    >
        {children}
    </View>;
}