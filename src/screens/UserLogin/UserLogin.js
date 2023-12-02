import React, { useState, useEffect } from 'react';

import axios from "axios";
import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, message } from 'antd';

import { getJwtToken, saveJwtToken, removeJwtToken } from '../../helper/jwt.helper';

import "./style.css";


const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Login
    </Button>
  );
};

export const UserLogin = () => {

  useEffect(()  => { document.body.classList.remove('login-style'); });

  const [messageApi, contextHolder] = message.useMessage();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    // console.log(newData);
    setData(newData);
  }

  function submit() {

    messageApi.open({
      type: 'logging in',
      content: 'logging in...',
      duration: 0.5
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/auth/user/signin`, {
        email: data.email,
        password: data.password,
      })
      .then((result) => {
        console.log(result);
        if(result.data.role == 1){

          saveJwtToken(result.data.id);

          setTimeout(() => {
            messageApi.open({
              type: 'success',
              content: 'Log in successful!',
              duration: 2,
            });
          }, 500);
          setTimeout(function() { window.location = "/"; }, 1000);
        }
        else{
          setTimeout(() => {
            messageApi.open({
              type: 'error',
              content: 'Please login with a customer account!',
              duration: 2,
            });
          }, 500);
        }
        
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setTimeout(() => {
          messageApi.open({
            type: 'error',
            content: err.response.data.message,
            duration: 2,
          });
        }, 500);
      });
  }

  const [form] = Form.useForm();

  const customAntdStyle = { 
    token: 
    { 
      fontFamily: "Poppins, Helvetica",
      fontSize: "14px",
      fontWeight: "500"
    } 
  }

  return (
    <ConfigProvider theme={customAntdStyle}>
      {contextHolder}
      <div className="user-login">

        <div className={`property-default-wrapper frame-57`}>
          <div className={`group frame-57-instance`}>
            <div className="div-wrapper">
              <div className="text-wrapper-2">Welcome back!</div>
            </div>
            <div className="div-wrapper" style={{top:'50px'}}>
              <div className="text-wrapper-3">Enter your Creditials to access your account</div>
            </div>
            {/* {hasDiv && <p className="p">Enter your Credentials to access your account</p>} */}

            {/* <div className="frame-2">
              <div className="frame-3">
                <div className="text-wrapper-3">Name</div>
              </div>
              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper-4">Enter your name</div>
                </div>
              </div>
            </div> */}
            {/* <Frame className="frame-instance" text="Enter your email" />
            <Frame className="frame-55-instance" text="Name" /> */}
            {/* <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="line" alt="Line" src="https://c.animaapp.com/gLSDdAkA/img/line-2-1.svg" />
                <div className="frame-6">
                  <div className="text-wrapper-5">Or</div>
                </div>
              </div>
            </div>
            <div className="group-2">
              <p className="i-agree-to-the-terms">
                <span className="span">I agree to the </span>
                <span className="text-wrapper-6">terms &amp; policy</span>
              </p>
              <div className="rectangle" />
            </div>
            <div className="group-wrapper">
              <div className="have-an-account-sign-wrapper">
                <p className="have-an-account-sign">
                  <span className="text-wrapper-7">Have an account?&nbsp;&nbsp;</span>
                  <span className={`text-wrapper-8 ${spanClassName}`}>Sign In</span>
                </p>
              </div>
            </div> */}

            <Form
              onFinish={() => submit()}
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              style={{marginTop:'110px'}}
            >
              <div className='frame-2'>

                <Form.Item
                  name="email"
                  label="Email address"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                  // style={{width:'400px'}}
                  className='text-wrapper-3'
                >
                  <Input id="email" placeholder="Enter your email" value={data.email} onChange={(e) => handle(e)}/>
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  // style={{width:'400px'}}
                  className='text-wrapper-3'
                >
                  <Input.Password placeholder="Enter your password" id="password" value={data.password} onChange={(e) => handle(e)}/>
                </Form.Item>
                
                <Form.Item
                  name="remember"
                >
                  <Checkbox>
                  Remember for 30 days
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Space>
                    <SubmitButton form={form} />
                    {/* <Button htmlType="Signup">Signup</Button> */}
                  </Space>
                </Form.Item>
              </div>
            </Form>

            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <Divider style={{ backgroundColor: '1px solid red' }}>Or</Divider>
              </div>
            </div> 
            {/* <a href="/" class="property-default property-1-default d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Signup</a> */}
    
            {/* <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="line" alt="Line" src="https://c.animaapp.com/gLSDdAkA/img/line-2-1.svg" />
                <div className="frame-6">
                  <div className="text-wrapper-5">Or</div>
                </div>
              </div>
            </div> */}

            <div className="frame-7">
              <a className="frame-8" href='/user-login'>
                <img className="img" alt="Google" src="https://c.animaapp.com/gLSDdAkA/img/icons8-google-1-1.svg" />
                <div className="text-wrapper-9">Sign in with Google</div>
              </a>
            </div>
            <div className="frame-9">
              <a className="frame-10" href='/user-login'>
                <img className="img" alt="Apple logo" src="https://c.animaapp.com/gLSDdAkA/img/icons8-apple-logo-1.svg" />
                <div className="text-wrapper-9">Sign in with Apple</div>
              </a>
            </div>

            <div className="group-wrapper">
              <div className="have-an-account-sign-wrapper">
                <p className="have-an-account-sign">
                  <span className="text-wrapper-7">Don't have an account?&nbsp;&nbsp;</span>
                  <a href="/user-signup">Sign up</a>
                </p>
              </div>
            </div>

          </div>
        </div>
        
        <p className="to-be-a-vendor-sign">
          <span className="text-wrapper-10">To be a vendor?&nbsp;&nbsp;</span>
          <a href="/vendor-login"><span className="design-component-instance-node">Login</span></a>
        </p>
        <img
          className="chris-lee"
          alt="Chris lee"
          src="https://c.animaapp.com/gLSDdAkA/img/chris-lee-70l1tdai6rm-unsplash-1.png"
        />
        <img
          className="original-logo"
          alt="Original logo"
          src="https://c.animaapp.com/gLSDdAkA/img/originallogo@2x.png"
        />
      </div>
    </ConfigProvider>
  );
}
