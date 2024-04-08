import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import './styles.scss';

const Register = () => {
    const navigate = useNavigate();
    const onSubmit = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className="container-form-register">
            <h1>Đăng ký tài khoản</h1>
            <Form
                onFinish={onSubmit}
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    label="Tên"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập tên tài khoản của bạn!',
                        },
                    ]}>
                    <Input placeholder="VD: Nguyễn Văn A" size="small" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập email và đúng định dạng!',
                            type: 'email'
                        },
                    ]}>
                    <Input placeholder="example@gmail.com" size="small" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password size="small" />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập lại mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password size="small" />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 14,
                    }}
                >
                    <div className="btn">
                        <Button size="small" htmlType="submit">
                            Đăng ký
                        </Button>
                        <Button
                            size="small"
                            className="btn-signup"
                            onClick={() => {
                                navigate('/auth/login');
                            }}
                        >
                            Đăng nhập
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register