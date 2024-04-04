import React, { useState } from "react";
import { Platform, TextInput, TextInputProps, TextStyle, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import HStack from "../layout/HStack";
import View from "../layout/View";
import Colors from "../Colors";
import Text from "./Text";
import Theme from "../Theme";

interface Props extends TextInputProps {
    label?: string;
    leftElement?: React.JSX.Element;
    rightElement?: React.JSX.Element;
    style?: TextStyle;
    error?: string;
}

if (Platform.OS == 'web')
{
    const style = document.createElement('style')
	style.textContent = `textarea, select, input, button { outline: none! important; }`
	document.head.append(style);
}

export default function Input({ label, leftElement, rightElement, style, error, ...props }: Props)
{
    const [isFocused, setFocused] = useState(false);
    const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        props.onFocus?.(e);
        setFocused(true);
    }

    const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        props.onBlur?.(e);
        setFocused(false);
    }

    return (
    <View>
        {label && <Text variant='subtitle'>{label}</Text>}
        <HStack space={10} style={{
            borderWidth: 1, paddingHorizontal: 10, alignItems: 'center',
            borderRadius: 10, height: 50,
            borderColor: isFocused ? `${Colors.primary}50` : Colors.background,
            backgroundColor: isFocused && `${Colors.primary}20`,
        }}>
            {leftElement}
            <TextInput {...props}
                placeholderTextColor={Colors.grey}
                style={{
                    flex: 1, height: '100%',
                    paddingVertical: 10,
                    color: Colors.dark,

                    ...Theme.Input.style,

                    ...style
                }}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {rightElement}
        </HStack>
        {error && <Text variant="error" style={{ padding: 5 }}>{error}</Text>}
    </View>
    );
}