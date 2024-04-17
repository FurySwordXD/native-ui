import React from "react";
import { Text as DefaultText, TextStyle, TextProps } from "react-native";
import Colors from "../Colors";
import Theme from "../Theme";
import useCurrentLocale from "../Localization";

interface Props {
    children?: string | React.JSX.Element | (string | React.JSX.Element)[];
}

interface Props extends TextProps {
    variant?: 'default' | 'heading' | 'key' | 'subtitle' | 'primary' | 'error';
    style?: TextStyle;
}

Theme.Text = {
    style: {
        fontSize: 12,
        fontWeight: '500',
    },
    variants: {
        'heading': {
            color: Colors.black,
            fontWeight: '600',
            fontSize: 20,
        },
        'key': {
            color: Colors.dark,
            fontWeight: '600',
            fontSize: 14,
        },
        'subtitle': {
            color: Colors.grey,
        },
        'error': {
            color: Colors.error,
        },
        'default': {
            color: Colors.dark,
        },
    }
};


export default function Text({ variant = 'default', style, children, ...props }: Props)
{
    const currentLocale = useCurrentLocale().get();

    if (typeof children == 'string')
    {
        if (LOCALIZED_STRINGS[children]?.[currentLocale])
        {
            children = LOCALIZED_STRINGS[children][currentLocale];
        }
    }

    return <DefaultText
        style={{

            ...Theme.Button.styleWithProps?.({ variant }),
            ...Theme.Text.style,

            ...Theme.Text.variantsWithProps?.[variant]?.({ variant }),
            ...Theme.Text.variants?.[variant],

            ...style
        }}
        {...props}
    >
        {children}
    </DefaultText>;
}