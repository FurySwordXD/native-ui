import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, ScrollView, Keyboard, ViewStyle, ScrollViewProps, Platform, TextInput, EmitterSubscription, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

interface Props extends ScrollViewProps
{
    dismissKeyboardOnScroll?: boolean;
    shouldSetHeight?: boolean;
    children: React.ReactNode;
    spacing?: number;
    padding?: number;
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
}

export default function KeyboardAvoidScrollView({ children, style, dismissKeyboardOnScroll = true, shouldSetHeight = false, contentContainerStyle, spacing = 0, padding = 0, ...props }: Props)
{
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [offset, setOffset] = useState(0);
    let scrollY = useRef(0).current;
    let scrollviewHeight = useRef<number>().current;
    const scrollviewRef = useRef<ScrollView>();

    useEffect(() => {
        let keyboardShowListener: EmitterSubscription;
        let keyboadDidChangeFrameListener: EmitterSubscription;

        if (Platform.OS === 'ios')
        {
            keyboardShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
                setKeyboardHeight(e.endCoordinates.height + padding);
                setOffset(spacing);
            });
            keyboadDidChangeFrameListener = Keyboard.addListener('keyboardDidChangeFrame', (e) => {
                setOffset(0);
            });
        }
        else
        {
            keyboardShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
                const keyboardHeight = e.endCoordinates.height;
                if (shouldSetHeight)
                    setKeyboardHeight(keyboardHeight + padding);
                TextInput.State.currentlyFocusedInput().measureLayout(scrollviewRef.current as any,
                (x, y, width, height) => {
                    const scrollpoint = y + height - scrollviewHeight + keyboardHeight + spacing + 100;
                    scrollviewRef.current.scrollTo({ y: scrollpoint, animated: true });
                });
            });
        }

        const keyboardHideListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', () => {
            setKeyboardHeight(0);
            setOffset(0);
        });

        return () => {
            keyboardShowListener.remove();
            keyboadDidChangeFrameListener?.remove();
            keyboardHideListener.remove();
        }
    }, [padding, spacing]);


    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (dismissKeyboardOnScroll && scrollY - e.nativeEvent.contentOffset.y > 50)
        {
            Keyboard.dismiss();
        }
        scrollY = e.nativeEvent.contentOffset.y;
    }

    return (
        <SafeAreaView style={{ ...style, marginBottom: keyboardHeight != 0 ? keyboardHeight : 0 }}>
		<ScrollView
            ref={scrollviewRef}
            onContentSizeChange={(w, h) => { scrollviewHeight = h; }}
            onScroll={onScroll}
            contentInset={{ bottom: offset }}
            contentContainerStyle={{
                flexGrow: 1, ...contentContainerStyle,
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