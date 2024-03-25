import React from "react";
import { hookstate, useHookstate } from '@hookstate/core';
import Toast from "./components/Toast";
import Modal from "./layout/Modal";

interface Props {
    children?: React.JSX.Element | React.JSX.Element[];
}

const messageActiveState = hookstate(false);
const messageQueueState = hookstate<Message[], {}>([]);

export function useMessage()
{
    const messageActive = useHookstate(messageActiveState);
    const messageQueue = useHookstate(messageQueueState);

    const showMessage = (message: Message) => {
        messageQueue.set(q => { q.push(message); return q; });
        if (!messageActive.get())
        {
            messageActive.set(true);
            setTimeout(() => {
                messageQueue.set(q => {
                    q.shift();
                    const nextMessage = q[0];
                    if (nextMessage) {
                        showMessage(nextMessage);
                    }
                    else {
                        messageActive.set(false);
                    }
                    return q;
                });
            }, message.duration || 5000);
        }
    }

    return { showMessage };
}

export function UIProvider({ children }: Props)
{
    const messageActive = useHookstate(messageActiveState);
    const messageQueue = useHookstate(messageQueueState);
    const currentMessage = messageQueue.get()[0];

    return <>
        <Modal visible={messageActive.get()} transparent={true}>
            {messageActive.get() && <Toast duration={currentMessage.duration} title={currentMessage.title} text={currentMessage.text} status={currentMessage.status} />}
        </Modal>
        {children}
    </>;
}