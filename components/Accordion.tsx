import React, { useEffect, useState } from "react";
import * as Animatable from 'react-native-animatable';

import Box from "../layout/Box";
import View from "../layout/View";
import HStack from "../layout/HStack";
import Icon from "../primitives/Icon";
import OverlaySpinner from "./OverlaySpinner";
import Button from "../primitives/Button";

interface Props {
    defaultIsOpen?: boolean;
    title: React.JSX.Element;
    content: React.JSX.Element;
    onOpen?: () => void;
    onClose?: () => void;
}

export default function Accordion({ defaultIsOpen = false, title, content, onOpen, onClose } : Props)
{
    const [isOpen, setIsOpen] = useState(defaultIsOpen);

    useEffect(() => {
        if (isOpen)
            onOpen?.();
        else
            onClose?.();
    }, [isOpen]);

    return (
        <View>
            <Button variant="link" onPress={()=>setIsOpen(o => !o)}>
                <HStack style={{ width: '100%', paddingRight: 10 }}>
                    <Box style={{ flex: 1 }}>{title}</Box>
                    <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} />
                </HStack>
            </Button>
            <View>
                {isOpen && <OverlaySpinner style={{ backgroundColor: 'transparent', maxHeight: 300 }} />}
                {isOpen && <Animatable.View animation={'fadeIn'} delay={1} duration={200} style={{ backgroundColor: 'white' }}>
                    {content}
                </Animatable.View>}
            </View>
        </View>
    )
}