import React, { useEffect, useRef } from "react";
import { hookstate, useHookstate } from '@hookstate/core';
import Toast from "./components/Toast";
import * as Animatable from "react-native-animatable";

interface Props {
    children?: React.JSX.Element | React.JSX.Element[];
}

const messageQueueState = hookstate<Message[], {}>([]);

export function useMessage()
{
    const messageQueue = useHookstate(messageQueueState);

    const currentMessage = messageQueue.get()[0];

    const showMessage = (message: Message) => {
        messageQueue.set(q => { q.push(message); return q; });
    }

    const dismissMessage = () => {
        messageQueue.set(q => { q.shift(); return q; });
    }

    return { currentMessage, showMessage, dismissMessage };
}

export function UIProvider({ children }: Props)
{
    const { currentMessage, dismissMessage } = useMessage();
    const timerHandle = useRef<number>();

    useEffect(() => {
        if (timerHandle.current)
            clearTimeout(timerHandle.current);

        if (currentMessage && currentMessage.duration !== null)
        {
            timerHandle.current = setTimeout(() => {
                dismissMessage();
            }, currentMessage.duration || 5000);
        }
    }, [currentMessage]);

    return <>
        {children}
        {currentMessage != null && <Animatable.View
            animation={currentMessage.animation || 'fadeInDown'}
            style={{ position: 'absolute' }}
        >
            {currentMessage.render?.(dismissMessage) ||
            <Toast message={currentMessage} onClose={dismissMessage} />}
        </Animatable.View>}
    </>;
}