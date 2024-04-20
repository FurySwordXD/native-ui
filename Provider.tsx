import React, { useEffect, useRef } from "react";
import { hookstate, useHookstate } from '@hookstate/core';
import Toast from "./components/Toast";
import * as Animatable from "react-native-animatable";
import useCurrentLocale from "./Localization";

interface Props {
    defaultLocale: string;
    children?: React.JSX.Element | React.JSX.Element[];
}

const messageQueueState = hookstate<Message[], {}>([]);

export function useMessage()
{
    const messageQueue = useHookstate(messageQueueState);

    const currentMessage = messageQueue.get({ noproxy: true })[0];

    const showMessage = (message: Message) => {
        messageQueue.set(q => { q.push(message); return q; });
    }

    const dismissMessage = () => {
        messageQueue.set(q => { q.shift(); return q; });
    }

    return { currentMessage, showMessage, dismissMessage };
}

export function UIProvider({ defaultLocale = 'en', children }: Props)
{
    const { currentMessage, dismissMessage } = useMessage();
    const currentLocale = useCurrentLocale();
    const timerHandle = useRef<number>();

    useEffect(() => {
        currentLocale.set(defaultLocale);
    }, []);

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