import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (Comp) {
    class Auth extends React.Component {
        UNSAFE_componentWillMount() {
            // 如果没有登录，就跳转到登录页
            if (this.props.isAuth === false) {
                this.props.history.push('/login');
            }
        }
        componentDidUpdate(nextProps) {
            if (!nextProps.isAuth && nextProps.isAuth !== this.props.isAuth) {
                this.props.history.push('/login');
            }
        }
        render() {
            return <Comp {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return {
            isAuth: state.login.isAuth
        };
    }

    return connect(mapStateToProps, null)(Auth);
};