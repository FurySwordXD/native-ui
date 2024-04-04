import React from "react";
import { Text as DefaultText, TextStyle, TextProps } from "react-native";
import Colors from "../Colors";
import Theme from "../Theme";

interface Props extends TextProps {
    variant?: 'default' | 'heading' | 'key' | 'subtitle' | 'primary' | 'error';
    style?: TextStyle;
}

Theme.Text = {
    style: {
        fontSize: 13,
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
            fontSize: 15,
        },
        'subtitle': {
            color: Colors.grey,
            fontSize: 13
        },
        'error': {
            color: Colors.grey,
        },
        'default': {
            color: Colors.dark,
        },
    }
};

export default function Text({ variant = 'default', style, children, ...props }: Props)
{
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