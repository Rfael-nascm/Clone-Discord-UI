import  React  from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Text Channels</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="free-chat" />
            <ChannelButton channelName="channel2" />
            <ChannelButton channelName="channel3" />
            <ChannelButton channelName="channel4" />
            <ChannelButton channelName="channel5" /> 
        </Container> 
    )
};

export default ChannelList;