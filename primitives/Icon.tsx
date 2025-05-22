import React from "react";
import "./IconSetup";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Zocial from "react-native-vector-icons/Zocial";

import Colors from "../Colors";

interface Props {
    name: string;
    type?: 'AntDesign' | 'Fontisto' | 'Material' | 'MaterialCommunity' | 'Entypo' | 'FontAwesome5' | 'Ionicons' | 'Zocial'
    | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'Foundation' | 'Octicons' | 'SimpleLineIcons';
    size?: number;
    color?: string;
}

export default function Icon({ name, size = 24, color = Colors.greyScale[1], type = 'MaterialCommunity' }: Props) {
    switch (type) {
        case "AntDesign":
            return <AntDesign name={name} size={size} color={color} />;
        case "Entypo":
            return <Entypo name={name} size={size} color={color} />;
        case "EvilIcons":
            return <EvilIcons name={name} size={size} color={color} />;
        case "Feather":
            return <Feather name={name} size={size} color={color} />;
        case "FontAwesome5":
            return <FontAwesome5 name={name} size={size} color={color} />;
        case "FontAwesome":
            return <FontAwesome name={name} size={size} color={color} />;
        case "Fontisto":
            return <Fontisto name={name} size={size} color={color} />;
        case "Foundation":
            return <Foundation name={name} size={size} color={color} />;
        case "Ionicons":
            return <Ionicons name={name} size={size} color={color} />;
        case "Material":
            return <MaterialIcon name={name} size={size} color={color} />;
        case "MaterialCommunity":
            return <MaterialCommunityIcon name={name} size={size} color={color} />;
        case "Octicons":
            return <Octicons name={name} size={size} color={color} />;
        case "SimpleLineIcons":
            return <SimpleLineIcons name={name} size={size} color={color} />;
        case "Zocial":
            return <Zocial name={name} size={size} color={color} />;
        default:
            return <MaterialCommunityIcon name={name} size={size} color={color} />;
    }
}


