import React from 'react'
import { Button, Header, Icon, Modal, Form , Input, Divider} from 'semantic-ui-react'

const ChurchModal = () => (
    <Modal trigger={<Button floated='right' icon labelPosition='left' primary size='small'>
        <Icon name='home'/> 추가
    </Button>}>
        <Modal.Header>새로운 교회 등록</Modal.Header>
        <Modal.Content scrolling>
            <Modal.Description>
                <Form>
                    <Header>교회</Header>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>교회번호</label>
                            <Input fluid disabled placeholder='교회번호' />
                        </Form.Field>
                        <Form.Field>
                            <label>교회이름</label>
                            <Input fluid placeholder='교회이름' />
                        </Form.Field>
                        <Form.Field>
                            <label>대표전화번호</label>
                            <Input fluid disabled placeholder='대표전화번호' />
                        </Form.Field>
                    </Form.Group>
                    <Divider horizontal><Icon color='red' name='heart' /></Divider>
                    <Header>최고관리자</Header>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>성도번호</label>
                            <Input fluid disabled placeholder='성도번호' />
                        </Form.Field>
                        <Form.Field>
                            <label>관리자이름</label>
                            <Input fluid placeholder='관리자이름' />
                        </Form.Field>
                        <Form.Field>
                            <label>핸드폰번호</label>
                            <Input fluid disabled placeholder='핸드폰번호' />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                <Icon name='checkmark'/> 저장
            </Button>
        </Modal.Actions>
    </Modal>
)

export default ChurchModal