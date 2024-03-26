import React, { useEffect, useState } from "react";
import HStack from "../layout/HStack";
import Icon from "../primitives/Icon";
import Button from "../primitives/Button";
import Text from "../primitives/Text";

interface Props  {
    label?: string;
    value?: boolean;
    onChange?: (v: boolean) => void;
    children?: React.JSX.Element;
}

export default function Checkbox({ label, value = false, onChange, children } : Props)
{
    const [checked, setChecked] = useState(value);

    return (
        <Button variant="ghost" onPress={()=>{ setChecked(c => { onChange?.(!c); return !c; }) }}>
            <HStack>
                <Icon size={24} name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'} />
                {label && <Text>{label}</Text>}
                {children}
            </HStack>
        </Button>
    )
}