import React from 'react';
import {Container, Header, Icon, Menu, Table, Input, Button} from 'semantic-ui-react'

const ManageMemberForm = () => {
    return (
        <div>
            <Container style={{paddingTop: '4em'}}>
                <Header as='h3'>성도 관리 페이지</Header>
                <Table size='small'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='6'>
                                <Input floated='left'
                                       icon={{name: 'search', circular: true, link: true}}
                                       placeholder='이름, 전화번호 등등'
                                />
                            </Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell>행번</Table.HeaderCell>
                            <Table.HeaderCell>사용자번호</Table.HeaderCell>
                            <Table.HeaderCell>이름</Table.HeaderCell>
                            <Table.HeaderCell>핸드폰번호</Table.HeaderCell>
                            <Table.HeaderCell>가입일시</Table.HeaderCell>
                            <Table.HeaderCell>로그인</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3928</Table.Cell>
                            <Table.Cell>김동훈</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>2018-04-02 20:31:05</Table.Cell>
                            <Table.Cell>
                                <Button size='mini' secondary>
                                    <Icon name='key'/>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3928</Table.Cell>
                            <Table.Cell>김동훈</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>2018-04-02 20:31:05</Table.Cell>
                            <Table.Cell>
                                <Button size='mini' secondary>
                                    <Icon name='key'/>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3928</Table.Cell>
                            <Table.Cell>김동훈</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>2018-04-02 20:31:05</Table.Cell>
                            <Table.Cell>
                                <Button size='mini' secondary>
                                    <Icon name='key'/>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3928</Table.Cell>
                            <Table.Cell>김동훈</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>2018-04-02 20:31:05</Table.Cell>
                            <Table.Cell>
                                <Button size='mini' secondary>
                                    <Icon name='key'/>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3928</Table.Cell>
                            <Table.Cell>김동훈</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>2018-04-02 20:31:05</Table.Cell>
                            <Table.Cell>
                                <Button size='mini' secondary>
                                    <Icon name='key'/>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>3928</Table.Cell>
                            <Table.Cell>김동훈</Table.Cell>
                            <Table.Cell>010-5375-0816</Table.Cell>
                            <Table.Cell>2018-04-02 20:31:05</Table.Cell>
                            <Table.Cell>
                                <Button size='mini' secondary>
                                    <Icon name='key'/>
                                </Button>
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

export default ManageMemberForm;