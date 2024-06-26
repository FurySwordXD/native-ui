import React from "react";
import { Image as DefaultImage, ImageProps, ImageStyle } from "react-native";
import Theme from "../Theme";

interface Props extends ImageProps {
    size?: number;
    style?: ImageStyle;
}

Theme.Image = {};

export default function Image({ size, style, ...props }: Props)
{
    return <DefaultImage {...props} style={{ width: size, height: size, ...Theme.Image.style as ImageStyle, ...style }} />;
}