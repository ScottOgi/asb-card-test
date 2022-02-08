import { Row, Card, Typography, Form, Input, Button } from 'antd'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StateCtx } from '../../store'
import { SUBMIT } from '../../store/action'

export const RegisterCard: React.FC = () => {
    const { name, cards: card, dispatch } = useContext(StateCtx)

    const navigate = useNavigate()

    const onFinish = (values:any) => {
        dispatch({type:SUBMIT, card:{
            number: values.ccNumber,
            cvc: values.cvc,
            expiry: values.expiry
        }})
        navigate("../MenuPage", { replace: true })
    }

    return (
        <Row justify='center' align='middle'>
            <Card title="Card Register" bordered={true} style={{width:500}}>
                <Typography>
                    <Typography.Title level={2}>
                        Welcome {name || 'User'}
                    </Typography.Title>
                </Typography>
                <Form
                    layout='vertical'
                    name='login-form'
                    className='login-form'
                    initialValues={{remember:true}}
                    onFinish={onFinish}>
                    <Form.Item
                        label="Credit card number"
                        name="ccNumber"
                        rules={[{required: true, message: 'Please input your credit card number.'}]}
                        >
                        <Input type='number' placeholder='Credit Card Number'/>
                    </Form.Item>
                    <Form.Item
                        label="cvc"
                        name="cvc"
                        rules={[{required: true, message: 'Please input your credit card security number.'}]}
                        >
                        <Input type='number' placeholder='CVC'/>
                    </Form.Item>
                    <Form.Item
                        label='Expiry'
                        name='expiry'
                        rules={[{required: true, message: 'Please input your credit card expiry.'}]}
                        >
                        <Input type='text' placeholder='MM/YY' maxLength={5}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    )
}

export default RegisterCard