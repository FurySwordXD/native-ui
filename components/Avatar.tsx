import React from "react";
import { ImageURISource } from "react-native";
import Box from "../layout/Box";
import Image from "../primitives/Image";
import Text from "../primitives/Text";
import Colors from "../Colors";

interface Props {
    source?: ImageURISource;
    alt?: string;
    size?: number;
    color?: string;
}

export default function Avatar({ source, size = 50, color = Colors.primary, alt }: Props) {
    return <Box style={{
        width: size, height: size, borderRadius: size,
        backgroundColor: color, overflow: 'hidden',
        justifyContent: 'center', alignItems: 'center'
    }}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.greyScale[4] }}>{alt}</Text>
        {source && <Image resizeMode="center" source={source} style={{ position: 'absolute', width: '100%', height: '100%' }} />}
    </Box>;
}