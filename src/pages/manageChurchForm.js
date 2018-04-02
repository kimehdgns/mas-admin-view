import React from 'react';
import {Container, Header, Icon, Label, Menu, Table, Input} from 'semantic-ui-react'
import ChurchModal from 'components/modals/churchModal';
import ServiceModal from 'components/modals/serviceModal';

const ManageChurchForm = () => {
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

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3227</Table.Cell>
                            <Table.Cell>할렐루야교회</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>kimehdgns@ohjic.com</Table.Cell>
                            <Table.Cell>
                                <Label color="red">대실</Label>
                                <Label color="orange">대차</Label>
                                <Label color="olive">증명서</Label>
                                <Label color="purple">헌금</Label>
                                <Label color="teal">요람</Label>
                                <ServiceModal/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3227</Table.Cell>
                            <Table.Cell>할렐루야교회</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>kimehdgns@ohjic.com</Table.Cell>
                            <Table.Cell>
                                <Label color="red">대실</Label>
                                <Label color="purple">헌금</Label>
                                <Label color="teal">요람</Label>
                                <ServiceModal/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3227</Table.Cell>
                            <Table.Cell>할렐루야교회</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>kimehdgns@ohjic.com</Table.Cell>
                            <Table.Cell>
                                <Label color="red">대실</Label>
                                <Label color="orange">대차</Label>
                                <Label color="olive">증명서</Label>
                                <Label color="purple">헌금</Label>
                                <Label color="teal">요람</Label>
                                <ServiceModal/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3227</Table.Cell>
                            <Table.Cell>할렐루야교회</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>kimehdgns@ohjic.com</Table.Cell>
                            <Table.Cell>
                                <Label color="olive">증명서</Label>
                                <Label color="purple">헌금</Label>
                                <ServiceModal/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3227</Table.Cell>
                            <Table.Cell>할렐루야교회</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>kimehdgns@ohjic.com</Table.Cell>
                            <Table.Cell>
                                <Label color="red">대실</Label>
                                <Label color="purple">헌금</Label>
                                <Label color="teal">요람</Label>
                                <ServiceModal/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3227</Table.Cell>
                            <Table.Cell>할렐루야교회</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>kimehdgns@ohjic.com</Table.Cell>
                            <Table.Cell>
                                <Label color="purple">헌금</Label>
                                <ServiceModal/>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>

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
};

export default ManageChurchForm;