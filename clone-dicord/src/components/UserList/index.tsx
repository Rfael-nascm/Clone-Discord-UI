import  React  from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: Boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Online - 1</Role>
            <UserRow nickname="{nickname}" />

            <Role>Offline - 1</Role>
            <UserRow nickname="{nickname}" isBot />
        </Container> 
    );
};

export default UserList;