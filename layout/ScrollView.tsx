import React from "react";
import { ScrollView as DefaultScrollView, ScrollViewProps, ViewStyle } from "react-native";
import Theme from "../Theme";

interface Props extends ScrollViewProps {
    contentContainerStyle?: ViewStyle;
}

Theme.ScrollView = {
    style: {
        alignItems: 'center',
        minHeight: '100%',
        flexGrow: 1
    }
};

export default function ScrollView({
    contentContainerStyle,
    keyboardDismissMode = 'interactive',
    keyboardShouldPersistTaps = 'handled',
    scrollIndicatorInsets = { right: 1 },
    children,
    ...props
}: Props)
{
    return <DefaultScrollView {...props}
        contentContainerStyle={{ ...Theme.ScrollView.style, ...contentContainerStyle }}
        keyboardDismissMode={keyboardDismissMode}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        scrollIndicatorInsets={scrollIndicatorInsets}
    >
        {children}
    </DefaultScrollView>;
}