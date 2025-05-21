import React from "react";
import { Text as DefaultText, TextStyle, TextProps } from "react-native";
import Colors from "../Colors";
import { useComponentTheme } from "../Theme";
import useCurrentLocale from "../Localization";

interface Props {
    children?: React.ReactNode;
}

interface Props extends TextProps {
    variant?: 'default' | 'heading' | 'key' | 'subtitle' | 'primary' | 'error';
    style?: TextStyle;
}

export default function Text({ variant = 'default', style, children, ...props }: Props) {
    const { theme } = useComponentTheme('Text');
    const currentLocale = useCurrentLocale().get();

    if (typeof children == 'string') {
        if (LOCALIZED_STRINGS[children]?.[currentLocale]) {
            children = LOCALIZED_STRINGS[children][currentLocale];
        }
    }

    return <DefaultText
        style={{

            ...theme.styleWithProps?.({ variant }),
            ...theme.style,

            ...theme.variantsWithProps?.[variant]?.({ variant }),
            ...theme.variants?.[variant],

            ...style
        }}
        {...props}
    >
        {children}
    </DefaultText>;
}