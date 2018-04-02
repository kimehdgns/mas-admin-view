import React from 'react';
import {Menu, Container} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const AppHeader = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as={Link} to='/' header>MAS Admin</Menu.Item>
                <Menu.Item as={Link} to='/manageMemberForm'>사용자</Menu.Item>
                <Menu.Item as={Link} to='/manageChurchForm'>교회</Menu.Item>
                <Menu.Item as={Link} to='/loginForm' position='right'>로그아웃</Menu.Item>
            </Container>
        </Menu>
    )
};

export default AppHeader;