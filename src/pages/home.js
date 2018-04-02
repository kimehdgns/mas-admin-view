import React from 'react'
import {Container, Header} from 'semantic-ui-react'

const Home = () => {
    return (
        <div>
            <Container text style={{marginTop: '7em'}}>
                <Header as='h1'>오직(주) MAS 관리자 페이지</Header>
                <p>MAS 관리자 페이지에 오신 것을 환영합니다.</p>
                <p>이 페이지에서는 사용자 및 교회 관리와 대실, 대차, 헌금, 증명서, 요람 등 서비스 관리를 할 수 있습니다.</p>
            </Container>
        </div>
    )
};

export default Home;