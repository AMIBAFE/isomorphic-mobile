import './index.less';

import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { array } from 'prop-types';

import fetch from '../../../client/fetch';
import { login } from '../../actions/common';

class Login extends React.Component<any, any> {
    componentWillMount() {
        const expires = Number(localStorage.getItem('qm91_token_expires'));
        const token = localStorage.getItem('qm91_token');

        if (token && expires && expires > new Date().getTime()) {
            this.props.history.push('/');
        }
    }
    componentDidMount() {

    }

    handleSubmit() {
        let account = (this.refs['account'] as any).value;
        let password = (this.refs['password'] as any).value;
        let { dispatch }: { dispatch: Dispatch<any> } = this.props;

        if (!account || !password) {
            alert('请输入账号和密码');
            return;
        }
        dispatch(login({
            account,
            password,
        }));
    }

    render() {
        return (
            <form>
                <div>
                    <label>账号：<input type="text" name="account" ref="account" /></label>
                </div>
                <div>
                    <label>密码：<input type="password" name="password" ref="password" /></label>
                </div>
                <span onClick={this.handleSubmit.bind(this)}>提交</span>
            </form>
        )
    }
}

export default connect()(Login as any);