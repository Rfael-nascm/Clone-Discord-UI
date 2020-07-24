import  React  from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />

            <Title>Free-Chat</Title>

            <Separator />

            <Description>Open channel to dialogs</Description>
        </Container> 
    );
};

export default ChannelInfo;