import React, { useEffect, useState } from "react";
import HStack from "../layout/HStack";
import Icon from "../primitives/Icon";
import Button from "../primitives/Button";
import Text from "../primitives/Text";

interface Props  {
    label?: string;
    value?: boolean;
    onChange?: (v: boolean) => void;
    isDisabled?: boolean;
    children?: React.JSX.Element;
}

export default function Checkbox({ label, value = false, onChange, isDisabled, children } : Props)
{
    const [checked, setChecked] = useState(value);

    useEffect(() => {
        setChecked(value);
    }, [value]);

    const onPress = () => {
        setChecked(c => {
            onChange?.(!c);
            return !c;
        });
    }

    return (
        <Button variant="ghost" disabled={isDisabled} onPress={onPress}>
            <HStack>
                <Icon size={24} name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'} />
                {label && <Text>{label}</Text>}
                {children}
            </HStack>
        </Button>
    )
}