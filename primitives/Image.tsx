import React from "react";
import { Image as DefaultImage, ImageProps, ImageStyle } from "react-native";
import { useComponentTheme } from "../Theme";

interface Props extends ImageProps {
    size?: number;
    style?: ImageStyle;
}

export default function Image({ size, style, ...props }: Props) {
    const { theme } = useComponentTheme('Image');
    return <DefaultImage {...props} style={{ width: size, height: size, ...theme.style as ImageStyle, ...style }} />;
}