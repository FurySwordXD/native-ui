import React, { forwardRef, useState, RefObject } from "react";
import { Platform, TextInput, TextInputProps, TextStyle, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import HStack from "../layout/HStack";
import View from "../layout/View";
import Colors from "../Colors";
import Text from "./Text";
import { useComponentTheme } from "../Theme";
import { useFocusedInput } from "../Provider";

interface Props extends TextInputProps {
    ref?: RefObject<TextInput>;
    label?: string;
    leftElement?: React.JSX.Element;
    rightElement?: React.JSX.Element;
    style?: TextStyle;
    error?: string;
    disabled?: boolean;
}

if (Platform.OS == 'web') {
    const style = document.createElement('style')
    style.textContent = `textarea, select, input, button { outline: none! important; }`
    document.head.append(style);
}

export default forwardRef(function Input(
    { label, leftElement, rightElement, style, error, disabled, returnKeyType, ...props }: Props,
    ref: React.ForwardedRef<TextInput>) {

    const { theme } = useComponentTheme('Input');
    const { setFocusedInput } = useFocusedInput();

    const [isFocused, setFocused] = useState(false);
    const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        props.onFocus?.(e);
        setFocusedInput(e.currentTarget as any);
        setFocused(true);
    }

    const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        props.onBlur?.(e);
        setFocusedInput(null);
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
                <TextInput
                    ref={ref}
                    {...props}
                    placeholderTextColor={Colors.grey}
                    style={{
                        flex: 1, height: '100%',
                        paddingVertical: 10,
                        color: Colors.dark,

                        ...theme.style,

                        ...style
                    }}
                    readOnly={disabled}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    returnKeyType={returnKeyType || 'done'}
                />
                {rightElement}
            </HStack>
            {error && <Text variant="error" style={{ padding: 5 }}>{error}</Text>}
        </View>
    );
});