import React from "react";
import { ViewStyle } from "react-native";
import View from "./View";
import Colors from "../Colors";
import Theme from "../Theme";

interface Props
{
    style?: ViewStyle;
}

Theme.Divider = {
    style: {
        height: 1,
        backgroundColor: `${Colors.grey}75`,
        marginTop: 5, marginBottom: 5,
    }
}

export default function Divider({ style }: Props)
{
    return <View style={{ ...Theme.Divider.style, ...style }} />;
}