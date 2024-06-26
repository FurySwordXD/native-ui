import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView, Keyboard, ViewStyle, ScrollViewProps } from 'react-native';

interface Props extends ScrollViewProps
{
    children: React.ReactNode;
    spacing?: number;
    padding?: number;
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
}

export default function KeyboardAvoidScrollView({ children, style, contentContainerStyle, refreshControl, spacing = 0, padding = 0, ...props }: Props)
{
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const keyboardShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
            setKeyboardHeight(e.endCoordinates.height + padding);
            setOffset(spacing);
        });
        const keyboardHideListener = Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardHeight(0);
            setOffset(0);
        });

        return () => {
            keyboardShowListener.remove();
            keyboardHideListener.remove();
        }
    }, [padding, spacing]);

    return (
        <SafeAreaView style={{ ...style, marginBottom: keyboardHeight != 0 ? keyboardHeight : 0 }}>
		<ScrollView
            refreshControl={refreshControl}
            contentInset={{ bottom: offset }}
            automaticallyAdjustKeyboardInsets={true}
            contentContainerStyle={{ flexGrow: 1, ...contentContainerStyle }}
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