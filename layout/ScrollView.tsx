import React from "react";
import { ScrollView as DefaultScrollView, ScrollViewProps, ViewStyle } from "react-native";
import { useComponentTheme } from "../Theme";

interface Props extends ScrollViewProps {
    scrollViewRef?: React.Ref<DefaultScrollView>;
    contentContainerStyle?: ViewStyle;
}

export default function ScrollView({
    scrollViewRef,
    contentContainerStyle,
    keyboardDismissMode = 'interactive',
    keyboardShouldPersistTaps = 'handled',
    scrollIndicatorInsets = { right: 1 },
    children,
    ...props
}: Props) {
    const { theme } = useComponentTheme('ScrollView');

    return <DefaultScrollView {...props}
        ref={scrollViewRef}
        contentContainerStyle={{ ...theme.style, ...contentContainerStyle }}
        keyboardDismissMode={keyboardDismissMode}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        scrollIndicatorInsets={scrollIndicatorInsets}
    >
        {children}
    </DefaultScrollView>;
}