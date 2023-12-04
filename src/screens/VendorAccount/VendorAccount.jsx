import React, { useState, useEffect } from 'react';

import axios from "axios";
import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, Upload, DatePicker, Progress, message, Dropdown } from 'antd';
import { DeleteOutlined, EditOutlined, SmileOutlined, DownOutlined } from "@ant-design/icons";

import moment from "moment";

import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { Login2 } from "../../icons/Login2";
import { CategoryDropDown } from "../../components/CategoryDropDown";

import { getJwtToken, saveJwtToken, removeJwtToken, returnToMainpage } from '../../helper/jwt.helper';

import { Route, Switch, useLocation } from 'react-router-dom'

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
      Save
    </Button>
  );
};

export const VendorAccount = () => {
  
  useEffect(()  => { document.body.classList.remove('login-style'); });

  const { pathname, hash, key } = useLocation();
  
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathname, hash, key]); // do this on route change

  const [messageApi, contextHolder] = message.useMessage();

  const [data, setData] = useState({
    _id: "",
    userId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    emailAddress: "",
    phoneNumber: "",
    streetAddress: "",
  });

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/vendor/getinfo`, {
        userId: getJwtToken(),
      })
      .then((response) => {
        console.log(response);
        setData(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      _id: data._id,
      userId: data.userId,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
      streetAddress: data.streetAddress
    });
  }, [data]);


  const signOut = () => {
    removeJwtToken();
  
    setTimeout(() => {
      messageApi.open({
        type: 'success',
        content: 'Log out successful!',
        duration: 2,
      });
    }, 500);
    setTimeout(function() { window.location = "/"; }, 1000);
    
  }
  
  const items = [
    {
      key: '1',
      label: "Sign out",
      onClick: () => { signOut(); },
    }
  ];

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function handleDateChange(date) {
    if (date != null) {
      const dateOfBirth = date.format("YYYY-MM-DD");
      const newData = { ...data };
      newData.dateOfBirth = dateOfBirth;
      console.log(newData);
      setData(newData);
    }
  }

  function submit() {

    messageApi.open({
      type: 'saving',
      content: 'saving...',
      duration: 0.5
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/vendor/save`, {
        _id: data._id,
        userId: getJwtToken(),
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber,
        streetAddress: data.streetAddress,
      })
      .then((result) => {
        console.log(result);

        setTimeout(() => {
          messageApi.open({
            type: 'success',
            content: 'Saved!',
            duration: 2,
          });
        }, 500);
        
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
      { getJwtToken() ?
      <div className="vendor-account">
        <div className="div-2">
          <div className="overlap">
            <img className="bg-img" alt="Bg img" src="/img/bgimg.png" />
            <a href='/'><img className="white-logo" alt="White logo" src="/img/whitelogo.png" /></a>
            <div className="navbar">
              <div className="text-wrapper-2"><a className="menu-link" href='/'>Home</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/vendor-booking'>Booking</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/vendor-company'>Company</a></div>
              <div className="text-wrapper-3"><a className="menu-link higlight" href='/vendor-account'>My Profile</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/vendor-schedule'>Schedule</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/'>Help</a></div>
            </div>

            { getJwtToken() ?
              
            <div className={`login-group myaccount-group-instance`}>
              <div className="overlap-group-wrapper">
                <div className={`overlap-group white-login-default`}>
                  <Login2 className="login-2-instance" />
                    <Dropdown
                      overlayClassName="my-account-dropdown"
                      menu={{
                        items,
                      }}
                    >
                      <a className="LOGIN signup" onClick={(e) => e.preventDefault()}>
                        <Space>
                          MyAccount
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                </div>
              </div>
            </div>
            :
            <LoginGroup
              className="login-group-instance"
              icon={<Login2 className="login-2-instance" />}
              whiteLogin="default"
              loginLink="/vendor-login"
              SignupLink="/vendor-signup"
            />
            }

            <div className="slogan">
              <div className="rectangle" />
              <div className="slogans">
                Discover
                <br />
                Book
                <br />
                Celebrate Your Moments
              </div>
            </div>
            <div className="rectangle-3" />
            <div className="overlap-wrapper" id="anchor">
              <div className="overlap-2">
                <a href='/vendor-company/#anchor'><div className="rectangle-4" /></a>
                <a href='/vendor-account/#anchor'><div className="rectangle-5" /></a>
                <a href='/vendor-schedule/#anchor'><div className="rectangle-6" /></a>
                <a href='/vendor-booking/#anchor'><div className="rectangle-7" /></a>
                <div className="group-2">
                  <a href='/vendor-company/#anchor'><div className="text-wrapper-6">Company Info</div></a>
                  <a href='/vendor-account/#anchor'><div className="text-wrapper-7">My Profile</div></a>
                  <a href='/vendor-schedule/#anchor'><div className="text-wrapper-8">Schedule</div></a>
                  <a href='/vendor-booking/#anchor'><div className="text-wrapper-9">Booking</div></a>
                  <img className="bi-info-circle" alt="Bi info circle" src="/img/bi-info-circle.svg" />
                </div>
              </div>
            </div>
            <div className="title-wrapper">
              <div className="title">
                <div className="abc">Vendor Profile</div>
              </div>

              <Form
                onFinish={() => submit()}
                form={form}
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
                style={{marginTop:'70px', marginLeft:'40px'}}
              >
                <div className='frame-2'>

                  <div style={{display: 'flex'}}>
                    <Form.Item
                      name="firstName"
                      label="First Name"
                      rules={[{ required: true, message: 'Please input your first name!' }]}
                      className='text-wrapper-3'
                    >
                      <Input id="firstName" placeholder="First name*" value={data.firstName} onChange={(e) => handle(e)}/>
                    </Form.Item>
                    
                    <Form.Item
                      name="middleName"
                      label="Middle Name"
                      className='text-wrapper-3'
                    >
                      <Input id="middleName" placeholder="Middle name" value={data.middleName} onChange={(e) => handle(e)}/>
                    </Form.Item>

                    <Form.Item
                      name="lastName"
                      label="Last Name"
                      rules={[{ required: true, message: 'Please input your last name!' }]}
                      className='text-wrapper-3'
                    >
                      <Input id="lastName" placeholder="Last name*" value={data.lastName} onChange={(e) => handle(e)}/>
                    </Form.Item>
                  </div>


                  <div style={{display: 'flex'}}>
                    <Form.Item
                      name="suffix"
                      label="Suffix"
                      className='text-wrapper-3'
                    >
                      <Input id="suffix" placeholder="Suffix" onChange={(e) => handle(e)}/>
                    </Form.Item>

                    <Form.Item 
                      name="dateOfBirth"
                      label="Date of birth"
                      rules={[{ required: true }]}
                      className='antd-datetime-picker'
                      >
                      <DatePicker id="dateOfBirth" placeholder="Date of birth*" value={moment(data.dateOfBirth)} onChange={(e) => handleDateChange(e)}/>
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="emailAddress"
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
                    className='text-wrapper-3'
                  >
                    <Input id="emailAddress" placeholder="Email address*" value={data.emailAddress} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item
                    name="phoneNumber"
                    label="Phone number"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone number!',
                      },
                    ]}
                    className='text-wrapper-3'
                  >
                    <Input id="phoneNumber" placeholder="Phone number*" value={data.phoneNumber} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item
                    name="streetAddress"
                    label="Street address"
                    className='text-wrapper-3'
                  >
                    <Input id="streetAddress" placeholder="Street address" value={data.streetAddress} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item
                    className='submit-button'
                  >
                    <Space>
                      <SubmitButton form={form} />
                    </Space>
                  </Form.Item>
                </div>
              </Form>

            </div>
          </div>
          <footer className="footer">
            <div className="group-wrapper">
              <div className="group-3">
                <p className="p">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-8" />
                <div className="overlap-3">
                  <div className="nav-wrap">
                    <div className="nav-list-item">
                      <div className="text-wrapper-10">Company</div>
                      <div className="frame">
                        <div className="text-wrapper-11">About Us</div>
                        <div className="text-wrapper-12">Contact Us</div>
                        <div className="text-wrapper-12">Follow Us</div>
                      </div>
                    </div>
                    <div className="nav-list-item-2" />
                    <div className="nav-list-item-3">
                      <p className="text-wrapper-10">Sign Up For Eventfull Updates</p>
                      <div className="div-wrapper">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <div className="text-wrapper-13">Your email address</div>
                            <div className="overlap-4">
                              <div className="text-wrapper-14">Subscribe</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="will-send-you-weekly">
                        *&nbsp;&nbsp;Will send you weekly updates for promotion events.
                      </p>
                    </div>
                  </div>
                  <div className="group-4">
                    <div className="discover-book">
                      Discover
                      <br />
                      Book
                      <br />
                      Celebrate Your Moments
                    </div>
                    <img className="group-5" alt="Group" src="/img/group-169.png" />
                  </div>
                </div>
                <a href='/'><img className="original-logo" alt="Original logo" src="/img/originallogo.png" /></a>
              </div>
            </div>
          </footer>
          <div className="group-6">
            <div className="overlap-5">
              <div className="footer-head">
                <div className="rectangle-9" />
              </div>
              <div className="text-wrapper-15">Explore Eventfull</div>
            </div>
          </div>
        </div>
      </div>
      :
      returnToMainpage()
      }
    </ConfigProvider>
  );
};
