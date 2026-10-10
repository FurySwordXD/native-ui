import React from 'react';
import View from './View';
import KeyboardAvoidScrollView from './KeyboardAvoidScrollView';
import Card from './Card';
import HStack from './HStack';
import Divider from './Divider';
import Modal from './Modal';
import Text from '../primitives/Text';
import IconButton from '../primitives/IconButton';
import Colors from '../Colors';
import { DimensionValue } from 'react-native';

interface Props {
    visible: boolean;
    title: string;
    onClose(): void;
    maxHeight?: DimensionValue;
    children: React.ReactNode;
}

export default function BottomSheet({ visible, title, onClose, maxHeight = '80%', children }: Props) {

    return (
        <Modal visible={visible} onRequestClose={onClose}>
            <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
                <Card
                    style={{
                        width: '100%',
                        backgroundColor: `${Colors.greyScale.at(-1)}`,
                        maxHeight,
                        paddingBottom: 30,
                        paddingHorizontal: 20,
                        borderRadius: 0,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }}
                >
                    <KeyboardAvoidScrollView>
                        <HStack>
                            <Text variant="heading" style={{ flex: 1 }}>{title}</Text>
                            <IconButton name="close" onPress={onClose} />
                        </HStack>
                        <Divider />
                        {children}
                    </KeyboardAvoidScrollView>
                </Card>
            </View>
        </Modal>
    );
}
