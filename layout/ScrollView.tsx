import React from "react";
import { ScrollView as DefaultScrollView, ScrollViewProps, ViewStyle } from "react-native";
import { useComponentTheme } from "../Theme";

interface Props extends ScrollViewProps {
    contentContainerStyle?: ViewStyle;
}

const ScrollView = React.forwardRef<DefaultScrollView, Props>(function ScrollView({
    contentContainerStyle,
    horizontal,
    keyboardDismissMode = 'interactive',
    keyboardShouldPersistTaps = 'handled',
    scrollIndicatorInsets = { right: 1 },
    children,
    ...props
}, ref) {
    const { theme } = useComponentTheme('ScrollView');

    return <DefaultScrollView {...props}
        ref={ref}
        horizontal={horizontal}
        contentContainerStyle={{
            ...theme.style,
            ...(horizontal && { minHeight: undefined }),
            ...contentContainerStyle
        }}
        keyboardDismissMode={keyboardDismissMode}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        scrollIndicatorInsets={scrollIndicatorInsets}
    >
        {children}
    </DefaultScrollView>;
});

export default ScrollView;