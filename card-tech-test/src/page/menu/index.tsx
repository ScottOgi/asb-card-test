import { Form, Row, Card, Typography, Input, Button } from "antd"
import { useContext } from "react"
import { StateCtx } from "../../store"
import { UPDATE } from "../../store/action"
const { Title } = Typography

export const MenuPage: React.FC = () => {
    const { name, cards, dispatch } = useContext(StateCtx)

    const onFinish = (values: any) => {
        dispatch({
            type: UPDATE,
            name: values.name
        })
    }

    return (
        <Row justify='center' align='middle'>
            { 
            cards.length == 0 ?
            <Card title={"Registered Cards"} bordered={true} style={{ width: 500, margin: 10 }}>
                <Typography>
                    <Title level={3}>No cards registered yet</Title>
                </Typography>
            </Card> :
            cards.map((card, index) => {
                return <Card title={"Registered Card " + ++index} bordered={true} style={{ width: 500, margin: 10 }}>
                    <Typography>
                        <Title level={4}>Number: {card.number}</Title>
                        <Title level={4}>CVC {card.cvc}</Title>
                        <Title level={4}>Expiry {card.expiry}</Title>
                    </Typography>
                </Card>
            })}

            <Card title="User Settings" bordered={true} style={{ width: 500, margin: 10 }}>
                <Typography>
                    <Title level={4}>Update your name</Title>
                </Typography>
                <Form
                    layout='vertical'
                    name='login-form'
                    className='login-form'
                    initialValues={{remember:true}}
                    onFinish={onFinish}>
                    <Form.Item
                        label="User Name"
                        name="name"
                        initialValue={ name || "" }
                        >
                        <Input type='text' placeholder='Luke Agius' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    )
}

export default MenuPage