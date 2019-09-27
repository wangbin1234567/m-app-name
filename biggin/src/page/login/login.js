import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
import '../../mock/mock'

class Login extends Component {
    addclick = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log('Received values of form: ', values);
        return;
      }
        // console.log("values",values);
        axios.post('/login',values).then(res => {
            console.log("res",res);
            if(res.data.code === 1){
              this.props.history.push('/home')
            }
        })
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <Form className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '账号不能为空' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入账号"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码不能为空' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>同意阿里巴巴的官方协议</Checkbox>)}
          <Button type="primary" className="login-form-button" onClick={this.addclick}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm
