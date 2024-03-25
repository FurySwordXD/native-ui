import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Platform, useWindowDimensions, SafeAreaView } from 'react-native';
import Text from '../primitives/Text';
import View from '../layout/View';
import Box from '../layout/Box';
import HStack from '../layout/HStack';
import Button from '../primitives/Button';
import Colors from '../Colors';
import Icon from '../primitives/Icon';

interface Props {
    message: Message;
    onClose?: () => void;
}

export default function Toast({ message, onClose }: Props)
{
    const { id, title, text, status, duration = 5000 } = message;

    let backgroundColor = Colors.dark;
    switch (status) {
        case 'info': backgroundColor = Colors.primary; break;
        case 'success': backgroundColor = Colors.success; break;
        case 'error': backgroundColor = Colors.error; break;
    }

    const progressAnim = useRef(new Animated.Value(0)).current;
    const windowSize = useWindowDimensions();

    useEffect(() => {
        progressAnim.setValue(0);
        Animated.timing(progressAnim, { toValue: 1, easing: Easing.linear, useNativeDriver: true, duration: duration * .9 }).start();
    }, [message]);

    return (
        <View style={{
                backgroundColor, overflow: 'hidden', width: windowSize.width,
                position: 'absolute', transformOrigin: 'left top',
                // top: Platform.OS == 'ios' ? -75 : -50,
            }}
        >
        <SafeAreaView>
            <HStack style={{ paddingHorizontal: 10, paddingVertical: 5, width: '100%' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    {title && <Text style={{ fontWeight: 'bold', color: 'white' }}>{title}</Text>}
                    {text && <Text style={{ color: 'white' }}>{text}</Text>}
                </View>
                <Button variant='ghost' onPress={onClose}>
                    <Icon name='close-circle-outline' color='white' />
                </Button>
            </HStack>
            <Box style={{ backgroundColor: Colors.grey, height: 5 }}>
                <Animated.View
                    style={{
                        backgroundColor: 'white',
                        width: '100%', height: '100%',
                        transformOrigin: 'left center',
                        transform: [{ scaleX: progressAnim }]
                    }}
                />
            </Box>
        </SafeAreaView>
        </View>
    );
}