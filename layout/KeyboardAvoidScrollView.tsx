import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, ScrollView, Keyboard, ViewStyle, ScrollViewProps, Platform, TextInput, EmitterSubscription, NativeScrollEvent, NativeSyntheticEvent, AppState, Dimensions, useWindowDimensions } from 'react-native';
import { useFocusedInput } from '../Provider';

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
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const scrollY = useRef(0);
    const scrollviewRef = useRef<ScrollView>();

    useEffect(() => {
        const keyboardShowListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', (e) => {
            setKeyboardHeight(e.endCoordinates.height);
        });

        const keyboardHideListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', () => {
            setKeyboardHeight(0);
        });

        return () => {
            keyboardShowListener.remove();
            keyboardHideListener.remove();
        }
    }, [spacing]);

    const screenHeight = useWindowDimensions().height;

    const onFocus = () => {
        const input = TextInput.State.currentlyFocusedInput();
        input.measureLayout(scrollviewRef.current as any, (x, y, width, height) => {
            const newY = y + height - screenHeight + keyboardHeight + spacing;
            scrollviewRef.current.scrollTo({ y: newY, animated: true })
        });
    }

    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (dismissKeyboardOnScroll && scrollY.current - e.nativeEvent.contentOffset.y > 50)
        {
            Keyboard.dismiss();
        }
        scrollY.current = e.nativeEvent.contentOffset.y;
    }

    const { focusedInput } = useFocusedInput();

    useEffect(() => {
        if (Platform.OS == 'web' || !focusedInput || !keyboardHeight)
            return;

        onFocus();
    }, [focusedInput, keyboardHeight]);

    return (
        <SafeAreaView
            style={{
                flex: 1, ...style,
                marginBottom: Platform.OS == 'ios' ? keyboardHeight : 0,
            }}
        >
		<ScrollView
            ref={scrollviewRef}
            onScroll={onScroll}
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