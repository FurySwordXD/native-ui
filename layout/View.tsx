import React from "react";
import { View as DefaultView, ViewProps, ViewStyle } from "react-native";
import Theme from "../Theme";

interface Props extends ViewProps {
    style?: ViewStyle;
}

Theme.View = {
    style: {
        width: '100%',
        gap: 5,
    }
};

export default function View({ style, children, ...props }: Props)
{
    return <DefaultView {...props} style={{ ...Theme.View.style, ...style }}>
        {children}
    </DefaultView>;
}