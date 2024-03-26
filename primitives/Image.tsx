import React from "react";
import { Image as DefaultImage, ImageProps, ImageStyle } from "react-native";

interface Props extends ImageProps {
    size?: number;
    style?: ImageStyle;
}

export default function Image({ size, style, ...props }: Props)
{
    return <DefaultImage {...props} style={{ width: size, height: size, ...style }} />;
}