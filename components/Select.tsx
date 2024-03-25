import React, { useState } from 'react';
import { Pressable, FlatList } from 'react-native';
import Modal from '../layout/Modal';
import Input from '../primitives/Input';
import Icon from '../primitives/Icon';
import View from '../layout/View';
import Button from '../primitives/Button';

interface SelectItem {
    key?: string;
    value: string;
    label: string;
}

interface Props {
    value?: string;
    onChange?(value: string): void;
    items: SelectItem[];
    placeholder?: string;
}

export default function Select({ value, onChange, items, placeholder }: Props)
{
    const [visible, setVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>(value);

    return (
        <>
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'white', maxHeight: '35%' }}>
                <FlatList
                    data={items}
                    keyExtractor={item => item?.key || item.value}
                    renderItem={({ item }) => <Button variant='ghost' color='dark' title={item.label} onPress={() => { setSelectedValue(item.value); setVisible(false); onChange?.(item.value); }} />}
                />
            </View>
        </Modal>
        <Pressable onPress={()=>setVisible(true)}>
            <Input placeholder={placeholder} readOnly={true} value={selectedValue} rightElement={<Icon name="chevron-down" />} />
        </Pressable>
        </>
    )
}