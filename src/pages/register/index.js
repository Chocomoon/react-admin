import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as registerActionCreators } from './store';
import "./index.css";
// 组件
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            userInfo: {},
            errMsg: ''
        };
    };

    onFinish = async (values) => {
        const { data } = await this.props.registerFn.registerAc(values);
        // if (data.status === 1) {
        //     this.setState({
        //         errMsg: data.msg,
        //     });
        // }
        // this.props.history.push('/decide');
        this.setState({
            errMsg: data.msg,
        });
        console.log(this.state.errMsg);
    };

    render() {
        return (
            <div className="content">
                <div className="form-wrap">
                    <div className="form-content">
                        <div className="form-header">
                            <div className="column">华浪科技</div>
                        </div>
                        <div className="form-content">
                            <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={this.onFinish}>
                                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！', },]}>
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item name="password" rules={[{ required: true, message: '请输入密码！', },]}>
                                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        注册
                                </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        registerData: state.register
    };
};

const mapDispatchToProps = dispatch => {
    return {
        registerFn: bindActionCreators(registerActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);