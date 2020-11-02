import React, { Component } from 'react';
import "./index.css";
// 组件
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends Component {
    constructor() {
        super();
        this.state = {};
    };

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    render() {
        return (
            <div className="form-wrap">
                <div>
                    <div className="form-header">
                        <div className="column">华浪科技</div>
                    </div>
                    <div className="form-content">
                        <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={() => this.onFinish}>
                            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！', },]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: '请输入密码！', },]}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                            </Form.Item>

                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>记住密码</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login