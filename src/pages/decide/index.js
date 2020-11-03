import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from '../../utils/request';
import "../../mock/mock.js";
// import { logout } from '../login/store/actionCreators';
import { actionCreators as decideActionCreators } from './store';
import { Image } from 'antd';
import { Button } from 'antd';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.js';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';

import "./index.css";

class Decide extends Component {
    constructor() {
        super();
        this.state = {
            userinfo: {},
            formtext: {}
        };
    };

    async componentDidMount() {
        const { data } = await axios.post('/api/decide');
        this.setState({
            username: data.username
        });
        // const { jsonData } = await axios.get('http://headers.jsontest.com/');
        // this.setState({
        //     jsonData
        // });
        // console.log('JsonData', jsonData);
        axios.get('/mock', { dataType: 'json' }) //这列的'/mock'与mock.js文件里的地址一致
            .then(res => {
                // console.log(res.data.userinfo)
                this.setState({
                    userinfo: res.data.userinfo
                })
            })
    }

    handleSubmit = async () => {
        // console.log(JSON.parse(this.state.formtext));
        const { data } = await this.props.decideFn.decideAc(JSON.parse(this.state.formtext));
        console.log(data);
    }

    handleLogout = () => {
        this.props.decideFn.logout();
    }

    render() {
        return (
            // <div>
            //     {
            //         this.props.loginData.isAuth
            //             ?
            //             <button onClick={this.props.logout}>{this.state.username}已登录，点击退出</button>
            //             :
            //             <button>点击登录</button>
            //     }
            // </div>
            <div className='wrap'>
                <div className='left'>
                    <Image alt="form"
                        className="form-photo"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <div>
                        {
                            this.props.loginData.isAuth
                                ?
                                <Button type="primary" onClick={this.handleLogout}>{this.state.username}已登录，点击退出</Button>
                                :
                                <Button type="primary">点击登录</Button>
                        }
                    </div>
                </div>

                <div className='right'>
                    <CodeMirror
                        value={JSON.stringify(this.state.userinfo, null, 4)}
                        options={{
                            lineNumbers: true,
                            theme: 'monokai',
                            autofocus: true,
                            lineWrapping: true,
                            foldGutter: true,
                            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                            mode: { name: "text/javascript", json: true }
                        }}
                        onChange={(editor, data, value) => {
                            // console.log("value:", value)
                            this.setState({
                                formtext: value
                            })
                        }}
                    />
                    <Button type="primary" onClick={this.handleSubmit}>点击提交</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decideFn: bindActionCreators(decideActionCreators, dispatch),
    };
}

// export default connect(mapStateToProps, { logout })(Decide);
export default connect(mapStateToProps, mapDispatchToProps)(Decide);