import React from "react";
import { ImageProps } from "react-native";
import Box from "../layout/Box";
import Image from "../primitives/Image";
import Text from "../primitives/Text";
import Colors from "../Colors";

interface Props {
    alt?: string;
    size?: number;
    color?: keyof typeof Colors;
}

export default function Avatar({ size = 50, color = 'primary', alt }: Props)
{
    return <Box style={{
        width: size, height: size, borderRadius: size,
        backgroundColor: Colors[color],
    }}>
        <Text style={{ fontSize: 14, fontWeight: '400', color: Colors.white }}>{alt}</Text>
        <Image resizeMode="center" style={{ position: 'absolute', width: '100%', height: '100%' }} />
    </Box>;
}