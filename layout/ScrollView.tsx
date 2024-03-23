import React from "react";
import { ScrollView, ScrollViewProps, ViewStyle } from "react-native";

interface Props extends ScrollViewProps {
    contentContainerStyle?: ViewStyle;
}

export default function CustomScrollView({ contentContainerStyle, children, ...props }: Props)
{
    return <ScrollView {...props}
        contentContainerStyle={{ alignItems: 'center', minHeight: '100%', flexGrow: 1, ...contentContainerStyle }}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        scrollIndicatorInsets={{ right: 1 }}
    >
        {children}
    </ScrollView>;
}