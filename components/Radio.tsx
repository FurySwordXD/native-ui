import React, { useEffect, useState } from "react";
import HStack from "../layout/HStack";
import Icon from "../primitives/Icon";
import Button from "../primitives/Button";
import Text from "../primitives/Text";
import Colors from "../Colors";

interface RadioOption {
    label: string;
    value: any;
}

interface RadioItemProps {
    isSelected: boolean;
    option: RadioOption;
    setSelectedOption: React.Dispatch<React.SetStateAction<RadioOption>>;
}

function RadioItem({ isSelected, option, setSelectedOption }: RadioItemProps) {
    return (
        <Button variant="ghost" onPress={() => { setSelectedOption(option) }}>
            <HStack>
                <Icon size={24} name={isSelected ? 'radiobox-marked' : 'radiobox-blank'}
                    color={isSelected ? Colors.primary : Colors.greyScale[1]}
                />
                <Text>{option.label}</Text>
            </HStack>
        </Button>
    )
}

interface Props {
    value?: string;
    onChange?: (v: string) => void;
    options: RadioOption[];
}

export default function Radio({ value, onChange, options }: Props) {
    const defaultOption = value ? options.find(o => o.value == value) : null;
    const [selectedOption, setSelectedOption] = useState<RadioOption>(defaultOption);

    useEffect(() => {
        if (selectedOption)
            onChange?.(selectedOption.value);
    }, [selectedOption]);

    return (<HStack space={50}>
        {options.map(option => <RadioItem key={option.value} option={option} isSelected={selectedOption?.value == option.value} setSelectedOption={setSelectedOption} />)}
    </HStack>);
}