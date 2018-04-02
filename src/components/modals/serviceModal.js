import React from 'react'
import {
    Button,
    Icon,
    Modal,
    Checkbox,
    Table,
} from 'semantic-ui-react'

const ServiceModal = () => (
    <Modal size='mini' trigger={<Button color="black" icon='add' size='mini'/>}>
        <Modal.Header>서비스 편집</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <Table textAlign='center'>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                대실
                            </Table.Cell>
                            <Table.Cell>
                                <Checkbox toggle/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                대차
                            </Table.Cell>
                            <Table.Cell>
                                <Checkbox toggle/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                증명서
                            </Table.Cell>
                            <Table.Cell>
                                <Checkbox toggle/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                헌금
                            </Table.Cell>
                            <Table.Cell>
                                <Checkbox toggle/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                요람
                            </Table.Cell>
                            <Table.Cell>
                                <Checkbox toggle/>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                <Icon name='checkmark'/> 저장
            </Button>
        </Modal.Actions>
    </Modal>
)

export default ServiceModal