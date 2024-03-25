import React, { useState } from 'react';
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
    value: string;
    onChange(value: string): void;
    items: SelectItem[];
    placeholder: string;
}

export default function Select({ value, onChange, items, placeholder }: Props)
{
    const [visible, setVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>(value);

    return (
        // <DefaultSelect selectedValue={value} placeholder={placeholder} onValueChange={onChange} style={{ width: '100%', height: '100%' }}>
        //     {items.map(item => <DefaultSelect.Item key={item?.key || item.value} label={item.label} value={item.value} />)}
        // </DefaultSelect>
        <>
        <Modal visible={visible}>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                {items.map(item => <Button variant='ghost' color='dark' key={item?.key || item.value} title={item.label}
                    onPress={() => { setSelectedValue(item.value); onChange(item.value); setVisible(false); }}
                />)}
            </View>
        </Modal>
        <Input placeholder={placeholder} value={selectedValue} readOnly={true} onPressOut={() => setVisible(true)}
            rightElement={<Icon name="chevron-down" />}
        />
        </>
    )
}