import React, { useRef, useState } from 'react';
import { Avatar, Button, Form, Input } from 'antd';
import mindx from '/mindxLogo.jpeg';
import './styles.scss';

const Account = () => {
    const inputFileRef = useRef(null);
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className="container-account">
            <Form
                // onFinish={onSubmit}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    label="Ảnh"
                    name="avatar"
                >
                    <Avatar src={file || mindx} size={200} shape='square' />
                    <input ref={inputFileRef} type="file" onChange={handleChange} style={{ display: 'none' }} />
                    <br />
                    <Button onClick={() => {
                        inputFileRef.current.click();
                    }}>
                        Tải ảnh
                    </Button>
                </Form.Item>
                <Form.Item
                    label="Tên"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập tên!',
                        },
                    ]}
                >
                    <Input size="small" />
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
                    label="Mật khẩu"
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
                <div className="btn">
                    <Button size="small" htmlType="submit">
                        Cập nhật
                    </Button>
                    <Button
                        size="small"
                        className="btn-signup"
                        onClick={() => {
                        }}
                    >
                        Huỷ
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Account;