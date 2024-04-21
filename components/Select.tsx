import React, { useEffect, useState } from 'react';
import { Pressable, FlatList, DimensionValue } from 'react-native';
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
    maxHeight?: DimensionValue;
}

export default function Select({ value, onChange, items, placeholder, maxHeight = '35%' }: Props)
{
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<SelectItem>();

    useEffect(() => {
        if (value)
            setSelectedItem(items.find(item => item.value == value));
    }, [value]);

    return (
        <>
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'white', maxHeight }}>
                <FlatList
                    data={items}
                    keyExtractor={item => item?.key || item.value}
                    renderItem={({ item }) => <Button variant='ghost' color='dark' title={item.label}
                    onPress={() => { setSelectedItem(item); setVisible(false); onChange?.(item.value); }} />}
                />
            </View>
        </Modal>
        <Pressable onPress={()=>setVisible(true)}>
            <Input placeholder={placeholder} readOnly={true} value={selectedItem.label || ""} rightElement={<Icon name="chevron-down" />} />
        </Pressable>
        </>
    )
}