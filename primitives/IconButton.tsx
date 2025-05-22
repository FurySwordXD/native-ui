import React from "react";
import { Platform, PressableProps, ViewStyle } from "react-native";
import Colors from "../Colors";
import Icon from "./Icon";
import Button from "./Button";

interface Props extends PressableProps {
    name: string;
    color?: string;
    type?: 'AntDesign' | 'Fontisto' | 'Material' | 'MaterialCommunity' | 'Entypo' | 'FontAwesome5' | 'Ionicons' | 'Zocial'
    | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Foundation' | 'Octicons' | 'SimpleLineIcons';
    size?: number;
    style?: ViewStyle;
}

export default function IconButton({ name, type, size, color = Colors.greyScale[1], style, ...props }: Props) {
    return (
        <Button variant="link" style={{ padding: 10, ...style }} {...props}>
            <Icon name={name} type={type} size={size} color={color} />
        </Button>);
}