import React from "react";
import { ScrollView as DefaultScrollView, ScrollViewProps, ViewStyle } from "react-native";

interface Props extends ScrollViewProps {
    contentContainerStyle?: ViewStyle;
}

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
        contentContainerStyle={{ alignItems: 'center', minHeight: '100%', flexGrow: 1, ...contentContainerStyle }}
        keyboardDismissMode={keyboardDismissMode}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        scrollIndicatorInsets={scrollIndicatorInsets}
    >
        {children}
    </DefaultScrollView>;
}