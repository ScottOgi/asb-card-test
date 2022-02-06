import { Row, Card, Typography, Form, Input, Button } from 'antd'

export const RegisterCard: React.FC = () => {


    return (
        <Row justify='center' align='middle'>
            <Card title="Card Register" bordered={true} style={{width:500}}>
                <Typography>
                    <Typography.Title level={2}>
                        Welcome Scott
                    </Typography.Title>
                </Typography>
                <Form
                    layout='vertical'
                    name='login-form'
                    className='login-form'
                    initialValues={{remember:true}}
                    onFinish={(values: any) => {
                        console.log(values)
                    }}>
                    <Form.Item
                        label="Credit card number"
                        name="ccNumber"
                        >
                        <Input type='number' placeholder='Credit Card Number'/>
                    </Form.Item>
                    <Form.Item
                        label="cvc"
                        name="cvc">
                        <Input type='number' placeholder='CVC'/>
                    </Form.Item>
                    <Form.Item
                        label='Expiry'
                        name='Expiry'>
                        <Input type='date' placeholder='Expiry'/>
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