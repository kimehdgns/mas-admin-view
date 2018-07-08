import React from 'react';
import {Container, Header, Table, Input} from 'semantic-ui-react';
import ChurchModal from 'components/modals/churchModal';
import ChurchList from 'components/church/churchList';
import Pagination from 'components/common/pagination';
import * as service from 'services/axios';

export default class ManageChurchForm extends React.Component {
    constructor(props) {
        super();

        this.state = {
            isFetching: false,
            currentPage : 1,
            churchListPerPage: 10,
            churchList: [],
            churchListCount : 0
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        this.fetchChurchList(1);
    }

    fetchChurchList = async (page) => {
        let searchValue = document.getElementById("churchSearchValue").value;
        this.setState({isFetching: true});

        const churchListInfo = await Promise.all([
            service.getChurchList(searchValue, page),
        ]);

        this.setState({
            isFetching: true,
            currentPage: page,
            churchListPerPage: churchListInfo[0].data.perPage,
            churchList: churchListInfo[0].data.list,
            churchListCount : churchListInfo[0].data.count
        });

        document.getElementById("churchSearchValue").select();
    }

    handleKeyPress(e) {
        if(e.charCode === 13){
            this.fetchChurchList(1);
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
                                    <Pagination count={this.state.churchListCount}
                                        page={this.state.currentPage}
                                        perPage={this.state.churchListPerPage}
                                        onPageClick={this.fetchChurchList}
                                    />
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Container>
            </div>
        )
    }
}