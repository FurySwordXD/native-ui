import React from "react";
import { Platform, PressableProps, ViewStyle } from "react-native";
import Colors from "../Colors";
import Icon from "./Icon";
import Button from "./Button";

interface Props extends PressableProps {
    name: string;
    color?: keyof typeof Colors;
    type?: 'AntDesign' | 'Fontisto' | 'Material' | 'MaterialCommunity' | 'Entypo' | 'FontAwesome5' ;
    size?: number;
    style?: ViewStyle;
}

export default function IconButton({ name, type, size, color = 'dark', style, ...props }: Props)
{
    return <Button variant="link" style={{ padding: 10, ...style }} {...props}>
        <Icon name={name} type={type} size={size} color={Colors[color]} />
    </Button>
}