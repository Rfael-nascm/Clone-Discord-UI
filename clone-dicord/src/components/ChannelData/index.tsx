import  React, { useRef, useEffect }  from 'react';

import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])

    return (
        <Container>
            <Messages>
                <ChannelMessage
                    author="AUTHOR"
                    date="13/07/2020"
                    content="blablablabla"
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Chat" />
                <InputIcon />
            </InputWrapper>
        </Container> 
    );
};

export default ChannelData;