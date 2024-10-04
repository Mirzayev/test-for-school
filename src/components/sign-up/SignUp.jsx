import { Form, Input, Button } from 'antd';

const Register = () => {
    const onFinish = (values) => {
        console.log('Form values:', values); // Form ma'lumotlari tekshiruvi uchun

        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: values.email, // Email va parolni APIga yuborish
                password: values.password
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-600 to-blue-600">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <Form name="register" onFinish={onFinish} layout="vertical">
                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                        <Input placeholder="Enter your email" />
                    </Form.Item>
                    <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Register
                        </Button>
                    </Form.Item>
                    <Form.Item className={'flex justify-center text-center '}>
                        <h4 className={''}>Lorem ipsum dolor sit amet, <a href="" className={'font-bold text-[16px] text-blue-400 font-mono'}>Sign in </a> consectetur adipisicing elit.</h4>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;
