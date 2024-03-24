import React from "react";
import { Image as DefaultImage, ImageProps } from "react-native";

export default function Image({ ...props }: ImageProps)
{
    return <DefaultImage {...props} />;
}