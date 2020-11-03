import React, { Component } from 'react';
import "./index.css";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as loginActionCreators } from './store';
import decode from 'jwt-decode';

class Login extends Component {
    constructor() {
        super();
        this.state = {};
    };

    onFinish = async (values) => {
        // console.log('Received values of form: ', values);
        const { data } = await this.props.loginFn.loginAc(values);
        // this.props.history.push('/decide');
        if (data.status === 0) {
            // 1. 同步用户状态和用户信息到 Redux
            this.props.loginFn.syncInfoAc(decode(data.token));
        }
        // console.log(data);
    };

    render() {
        return (
            <div className="form-wrap">
                <div className="form-content">
                    <div className="form-header">
                        <div className="column">华浪科技</div>
                    </div>
                    <div className="form-content">
                        <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={this.onFinish}>
                            {/* <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish}> */}
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

const mapStateToProps = state => {
    return {
        loginData: state.login
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginFn: bindActionCreators(loginActionCreators, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);