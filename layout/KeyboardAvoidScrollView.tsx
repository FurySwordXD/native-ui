import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SafeAreaView, View, ScrollView, Keyboard, ViewStyle, ScrollViewProps, Platform } from 'react-native';

interface Props extends ScrollViewProps
{
    shouldSetHeight?: boolean;
    children: React.ReactNode;
    spacing?: number;
    padding?: number;
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
}

export default function KeyboardAvoidScrollView({ children, style, shouldSetHeight = false, contentContainerStyle, refreshControl, spacing = 0, padding = 0, ...props }: Props)
{
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const keyboardShowListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', (e) => {
            if (Platform.OS === 'ios' || shouldSetHeight)
                setKeyboardHeight(e.endCoordinates.height + padding);
            setOffset(spacing);
        });
        const keyboadDidChangeFrameListener = Keyboard.addListener('keyboardDidChangeFrame', (e) => {
            setOffset(0);
        });
        const keyboardHideListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', () => {
            setKeyboardHeight(0);
            setOffset(0);
        });

        return () => {
            keyboardShowListener.remove();
            keyboadDidChangeFrameListener.remove();
            keyboardHideListener.remove();
        }
    }, [padding, spacing]);

    return (
        <SafeAreaView style={{ ...style, marginBottom: keyboardHeight != 0 ? keyboardHeight : 0 }}>
		<ScrollView
            refreshControl={refreshControl}
            contentInset={{ bottom: offset }}
            contentContainerStyle={{
                flexGrow: 1, ...contentContainerStyle,
                ...(Platform.OS === 'android' && { bottom: offset })
            }}
            keyboardShouldPersistTaps='handled'
            {...props}
        >
        <View style={{ flexGrow: 1 }}>
			{children}
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}