import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../utils/request';
import "../../mock/mock.js";
import { logout } from '../login/store/actionCreators';
import { Image } from 'antd';
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
            userinfo: {}
        };
    };

    async componentDidMount() {
        // const { data } = await axios.post('/api/decide');
        // this.setState({
        //     username: data.username
        // });
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

    handleClick = () => {
        console.log(this.state.userinfo)
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
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
                <div className='right'>
                    <CodeMirror
                        value={JSON.stringify(this.state.userinfo)}
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
                        }}
                    />
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

export default connect(mapStateToProps, { logout })(Decide);