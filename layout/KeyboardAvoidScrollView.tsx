import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, ScrollView, Keyboard, ViewStyle, ScrollViewProps, Platform, TextInput, EmitterSubscription, NativeScrollEvent, NativeSyntheticEvent, AppState } from 'react-native';

interface Props extends ScrollViewProps
{
    dismissKeyboardOnScroll?: boolean;
    children: React.ReactNode;
    spacing?: number;
    style?: ViewStyle;
    contentContainerStyle?: ViewStyle;
}

export default function KeyboardAvoidScrollView({ children, style, dismissKeyboardOnScroll = true, spacing = 0, contentContainerStyle, ...props }: Props)
{
    const [keyboardHeightState, setKeyboardHeightState] = useState(0);
    const scrollY = useRef(0);
    const keyboardHeight = useRef<number>(0);
    const scrollviewHeight = useRef<number>(0);
    const scrollviewRef = useRef<ScrollView>();

    useEffect(() => {
        const keyboardShowListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', (e) => {
            keyboardHeight.current = e.endCoordinates.height;
            if (Platform.OS === 'ios') {
                setTimeout(onFocus, 100);
                setKeyboardHeightState(keyboardHeight.current);
            }
            else {
                onFocus();
            }
        });

        const keyboardHideListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', () => {
            keyboardHeight.current = 0;
            setKeyboardHeightState(0);
        });

        return () => {
            keyboardShowListener.remove();
            keyboardHideListener.remove();
        }
    }, [spacing]);

    const scrollpoint = useRef<number>(0);
    const onFocus = () => {
        const input = TextInput.State.currentlyFocusedInput();
        if (!input || keyboardHeight.current < 1)
            return;

        input.measureLayout(scrollviewRef.current as any,
            (x, y, width, height) => {
            const newY = Math.min(
                y + height - scrollviewHeight.current + keyboardHeight.current + spacing + 100,
                scrollviewHeight.current);
            if (Math.abs(scrollpoint.current - newY) > 10)
            {
                scrollviewRef.current.scrollTo({ y: newY, animated: true });
                scrollpoint.current = newY;
            }
        });
    }

    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (dismissKeyboardOnScroll && scrollY.current - e.nativeEvent.contentOffset.y > 50)
        {
            Keyboard.dismiss();
        }
        scrollY.current = e.nativeEvent.contentOffset.y;
    }

    return (
        <SafeAreaView
            style={{
                flex: 1, ...style,
                marginBottom: keyboardHeightState,
            }}
        >
		<ScrollView
            ref={scrollviewRef}
            onContentSizeChange={(w, h) => { scrollviewHeight.current = h; }}
            onScroll={onScroll}
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