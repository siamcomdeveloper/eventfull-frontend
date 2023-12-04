import React, { useState, useEffect } from 'react';

import axios from "axios";
import { ConfigProvider, Form, Input, Button, Space, Checkbox, Divider, message } from 'antd';

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
      Signup
    </Button>
  );
};

export const VendorSignUp = () => {

  useEffect(()  => { document.body.classList.remove('login-style'); });

  const [messageApi, contextHolder] = message.useMessage();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submit() {

    messageApi.open({
      type: 'signing up',
      content: 'Signing up...',
      duration: 0.5
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/auth/user/signup/2`, {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((result) => {
        console.log(result);
        setTimeout(() => {
          messageApi.open({
            type: 'success',
            content: 'Signed in!',
            duration: 1,
          });
        }, 500);
        setTimeout(function() { window.location = "/vendor-login"; }, 1000);
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
      <div className="user-sign-up">

        <div className={`property-default-wrapper frame-57`}>
          <div className={`group frame-57-instance`}>
            <div className="div-wrapper">
              <div className="text-wrapper-2">To Be An Eventfull Vendor Now</div>
            </div>

            <Form
              onFinish={() => submit()}
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              style={{marginTop:'70px'}}
            >
              <div className='frame-2'>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                  className='text-wrapper-3'
                >
                  <Input id="name" placeholder="Enter your name" value={data.name} onChange={(e) => handle(e)}/>
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
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
                  className='text-wrapper-3'
                >
                  <Input id="email" placeholder="Enter your email" value={data.email} onChange={(e) => handle(e)}/>
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  className='text-wrapper-3'
                >
                  <Input.Password placeholder="Enter your password" id="password" value={data.password} onChange={(e) => handle(e)}/>
                </Form.Item>
                
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Please accept agreement')),
                    },
                  ]}
                >
                  <Checkbox>
                  I agree to the <a href="">terms &amp; policy</a>
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Space>
                    <SubmitButton form={form} />
                  </Space>
                </Form.Item>
              </div>
            </Form>

            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <Divider style={{ backgroundColor: '1px solid red' }}>Or</Divider>
              </div>
            </div>

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
                  <span className="text-wrapper-7">Have an account?&nbsp;&nbsp;</span>
                  <a href="/vendor-login">Sign In</a>
                </p>
              </div>
            </div>

          </div>
        </div>
        
        <p className="to-be-a-vendor-sign">
          <span className="text-wrapper-10">To be a customer?&nbsp;&nbsp;</span>
          <a href="/user-signup"><span className="design-component-instance-node">Sign Up</span></a>
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
