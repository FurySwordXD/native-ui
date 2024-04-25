import React, { useEffect, useState } from 'react';
import { Pressable, FlatList, DimensionValue, SafeAreaView } from 'react-native';
import Modal from '../layout/Modal';
import Input from '../primitives/Input';
import Icon from '../primitives/Icon';
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
            <SafeAreaView style={{ position: 'absolute', width: '100%', bottom: 0, backgroundColor: 'white', maxHeight }}>
                <FlatList
                    data={items}
                    keyExtractor={item => item?.key || item.value}
                    style={{ paddingTop: 10 }}
                    renderItem={({ item }) => <Button variant='ghost' color='dark' title={item.label}
                    onPress={() => { setSelectedItem(item); setVisible(false); onChange?.(item.value); }} />}
                />
            </SafeAreaView>
        </Modal>
        <Pressable onPress={()=>setVisible(true)}>
            <Input
                placeholder={placeholder}
                rightElement={<Icon name="chevron-down" />}
                style={{ pointerEvents: 'none' }} readOnly={true}
                value={selectedItem?.label || ""}
            />
        </Pressable>
        </>
    )
}