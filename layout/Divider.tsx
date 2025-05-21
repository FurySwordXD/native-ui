import React from "react";
import { ViewStyle } from "react-native";
import View from "./View";
import Colors from "../Colors";
import { useComponentTheme } from "../Theme";

interface Props {
    style?: ViewStyle;
}

export default function Divider({ style }: Props) {
    const { theme } = useComponentTheme('Divider');
    return <View style={{ ...theme.style, ...style }} />;
}