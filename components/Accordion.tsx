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
}

export default function Accordion({ defaultIsOpen = false, title, content } : Props)
{
    const [isOpen, setIsOpen] = useState(defaultIsOpen);

    return (
        <View>
            <Button variant="ghost" onPress={()=>setIsOpen(o => !o)}>
                <HStack style={{ paddingHorizontal: 10 }}>
                    <Box style={{ flex: 1 }}>{title}</Box>
                    <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} />
                </HStack>
            </Button>
            <View>
                {isOpen && <OverlaySpinner style={{ backgroundColor: 'transparent', maxHeight: 300 }} />}
                {isOpen && <Animatable.View animation={'fadeIn'} delay={1} duration={200}>
                    {content}
                </Animatable.View>}
            </View>
        </View>
    )
}