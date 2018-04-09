import React from 'react';
import {Container, Header, Icon, Menu, Table, Input} from 'semantic-ui-react'
import ChurchModal from 'components/modals/churchModal';
import ChurchList from 'components/church/churchList';
import * as service from 'services/axios';

export default class ManageChurchForm extends React.Component {
    constructor(props) {
        super();

        this.state = {
            isFetching: false,
            churchList: []
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        this.fetchChurchList('');
    }

    fetchChurchList = async (searchValue) => {
        this.setState({isFetching: true});

        const churchListInfo = await Promise.all([
            service.getChurchList(searchValue),
        ]);

        this.setState({
            isFetching: true,
            churchList: churchListInfo[0].data
        });

        document.getElementById("churchSearchValue").select();
    }

    handleKeyPress(e) {
        if(e.charCode === 13){
            let searchValue = document.getElementById("churchSearchValue").value;
            this.fetchChurchList(searchValue);
        }
    }

    render() {
        return (
            <div>
                <Container style={{paddingTop: '4em'}}>
                    <Header as='h3'>교회 관리 페이지</Header>
                    <Table size='small'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='6'>
                                    <Input floated='left'
                                           icon={{name: 'search', circular: true, link: true}}
                                           placeholder='이름, 전화번호 등등'
                                           id='churchSearchValue'
                                           onKeyPress={this.handleKeyPress}
                                    />
                                    <ChurchModal/>
                                </Table.HeaderCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell>행번</Table.HeaderCell>
                                <Table.HeaderCell>교회번호</Table.HeaderCell>
                                <Table.HeaderCell>이름</Table.HeaderCell>
                                <Table.HeaderCell>대표전화번호</Table.HeaderCell>
                                <Table.HeaderCell>대표이메일</Table.HeaderCell>
                                <Table.HeaderCell>개설된 서비스</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <ChurchList churchList={this.state.churchList}/>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='6'>
                                    <Menu floated='right' pagination>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron left'/>
                                        </Menu.Item>
                                        <Menu.Item as='a'>1</Menu.Item>
                                        <Menu.Item as='a'>2</Menu.Item>
                                        <Menu.Item as='a'>3</Menu.Item>
                                        <Menu.Item as='a'>4</Menu.Item>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron right'/>
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Container>
            </div>
        )
    }
}