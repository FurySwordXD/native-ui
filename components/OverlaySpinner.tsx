import React from "react";
import { ViewStyle, ActivityIndicator } from "react-native";
import View from "../layout/View";
import Text from "../primitives/Text";
import Colors from "../Colors";

interface Props {
    message?: string;
    opacity?: number;
    style?: ViewStyle;
}

export default function OverlaySpinner({ message, opacity, style }: Props) {
    return (
        <View
            style={{
                position: 'absolute', width: '100%', height: '100%',
                backgroundColor: `rgba(234, 239, 246, ${opacity || 0.5})`,
                top: 0, left: 0, right: 0, bottom: 0,
                justifyContent: 'center', alignItems: 'center',
                ...style
            }}
        >
            <ActivityIndicator size="large" color={Colors.primary} />
            {message && <Text>{message}</Text>}
        </View>
    );
}