import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView, Keyboard } from 'react-native';

interface Props
{
    children: React.ReactNode;
    spacing?: number;
    padding?: number;
}

export default function KeyboardAvoidView({ children, spacing = 0, padding = 0 }: Props)
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
        <SafeAreaView style={{ marginBottom: keyboardHeight != 0 ? keyboardHeight : 0 }}>
		<ScrollView
            contentInset={{ bottom: offset }}
            nestedScrollEnabled={false}
            scrollsToTop={false}
            automaticallyAdjustKeyboardInsets={true}
            bounces={false}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'
        >
        <View style={{ flex: 1 }}>
			{children}
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}