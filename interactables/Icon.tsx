import React from "react";
import "./IconSetup";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Colors from "../Colors";

interface Props  {
    name: string;
    type?: 'AntDesign' | 'Fontisto' | 'Material' | 'MaterialCommunity';
    size?: number;
    color?: string;
}

export default function Icon({ name, size = 24, color = Colors.primary, type = 'MaterialCommunity' }: Props)
{
    switch (type) {
        case "AntDesign":
            return <AntDesign name={name} size={size} color={color} />;
        case "Material":
            return <MaterialIcon name={name} size={size} color={color} />;
        case "MaterialCommunity":
            return <MCIcon name={name} size={size} color={color} />;
        case "Fontisto":
            return <Fontisto name={name} size={size} color={color} />;
        default:
            return <MCIcon name={name} size={size} color={color} />;
    }
}


