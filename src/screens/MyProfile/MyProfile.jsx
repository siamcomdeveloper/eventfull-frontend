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

export const MyProfile = () => {
  
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

  const [isHoverVendor, setHoverVendor] = React.useState(false);
  
  const [data, setData] = useState({
    _id: "",
    userId: "",
    Name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    console.log(getJwtToken());
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/user/search/${getJwtToken()}`, {
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
      username: data.username,
      email: data.email,
      phone: data.phone,
    });
  }, [data]);


  const signOut = () => {
    // console.log("signOut click");
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
    // console.log(newData);
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
      .post(`${process.env.REACT_APP_API_URL}/api/v1/user/save`, {
        _id: data._id,
        username: data.username,
        email: data.email,
        phone: data.phone
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
      <div className="my-profile">
        <div className="div-2">
          <div className="overlap">
            <img className="bg-img" alt="Bg img" src="/img/bgimg.png" />
            <a href='/'><img className="white-logo" alt="White logo" src="/img/whitelogo.png" /></a>

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

            <div className={`menu navbar`}>
              <div className={`div menu-home-home menu-instance`}><a className="menu-link" href='/'>Home</a></div>
              <div className={`div menu-home-home menu-instance`}><div className="menu-link vendor" href='/vendors' onClick={() => { setHoverVendor(!isHoverVendor); }}>Vendors</div></div>
              <div className={`text-wrapper-2 menu-home-0-home menu-instance`}><a className="menu-link" href='/about-us'>About Us</a></div>
              <div className={`text-wrapper-3 menu-home-1-home menu-instance`}><a className="menu-link" href='/princing'>Pricing</a></div>
            </div>

            { getJwtToken() ?
              
              <div className={`login-group myaccount-group-instance`}>
                <div className="overlap-group-wrapper">
                  <div className={`overlap-group white-login-default`}>
                    <Login2 className="login-2-instance" />
                      <Dropdown
                        overlayClassName="my-profile-dropdown"
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

            { isHoverVendor ?
              <CategoryDropDown
                categoryDropDownClassName="design-component-instance-node"
                className="category-drop-down-instance"
                spanClassName="category-drop-down-2"
              /> : <div></div>
            }

            <div className="group" id="anchor">
              <div className="overlap-group">
                <div className="rectangle-2" />
                <div className="group-2">
                  <div className="overlap-group-2">
                    <a href='/mybooking/#anchor'><div className="rectangle-3" /></a>
                    <a href='/myprofile/#anchor'><div className="rectangle-4" /></a>
                    <a href='/subscribe/#anchor'><div className="rectangle-5" /></a>
                    <a href='/plans/#anchor'><div className="rectangle-6" /></a>
                    <div className="group-3">
                      <a href='/mybooking/#anchor'><div className="text-wrapper-6">My Bookings</div></a>
                      <a href='/myprofile/#anchor'><div className="text-wrapper-7">My Profile</div></a>
                      <a href='/subscribe/#anchor'><div className="billing-subscription">Subscription</div></a>
                      <a href='/plans/#anchor'><div class="get-eventfull-pro">Get Eventfull Pro</div></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="title-wrapper">
              <div className="title">
                <div className="abc">Profile</div>
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
                      name="username"
                      label="Name"
                      rules={[{ required: true, message: 'Please input your name!' }]}
                      className='text-wrapper-3'
                    >
                      <Input id="username" placeholder="Name*" value={data.username} onChange={(e) => handle(e)}/>
                    </Form.Item>
                    
                  </div>

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
                    <Input id="email" placeholder="Email*" value={data.email} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone number!',
                      },
                    ]}
                    className='text-wrapper-3'
                  >
                    <Input id="phone" placeholder="Phone*" value={data.phone} onChange={(e) => handle(e)}/>
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
              <div className="group-4">
                <p className="p">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-7" />
                <div className="nav-wrap">
                  <div className="nav-list-item">
                    <div className="text-wrapper-9">Company</div>
                    <div className="frame">
                      <div className="text-wrapper-10">About Us</div>
                      <div className="text-wrapper-11">Contact Us</div>
                      <div className="text-wrapper-11">Follow Us</div>
                    </div>
                  </div>
                  <div className="nav-list-item-2">
                    <div className="text-wrapper-9">Parteners</div>
                    <div className="frame-2">
                      <div className="text-wrapper-10">Paradox Hotel Vancouver</div>
                      <div className="text-wrapper-11">Fairmont Empress</div>
                      <div className="text-wrapper-11">Chinook Photography</div>
                      <p className="text-wrapper-11">Connect in the 6 Events</p>
                    </div>
                  </div>
                  <div className="nav-list-item-3">
                    <p className="text-wrapper-9">Sign Up For Eventfull Updates</p>
                    <div className="div-wrapper">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-3">
                          <div className="text-wrapper-12">Your email address</div>
                          <div className="overlap-3">
                            <div className="text-wrapper-13">Subscribe</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="will-send-you-weekly">
                      *&nbsp;&nbsp;Will send you weekly updates for your better
                      <br />
                      vendors.
                    </p>
                  </div>
                </div>
                <div className="group-5">
                  <div className="discover-book">
                    Discover
                    <br />
                    Book
                    <br />
                    Celebrate Your Moments
                  </div>
                  <img className="group-6" alt="Group" src="/img/group-169.png" />
                </div>
                <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
              </div>
            </div>
          </footer>
          <div className="group-7">
            <div className="group-8">
              <div className="overlap-group-4">
                <div className="footer-head">
                  <div className="rectangle-8" />
                </div>
                <div className="text-wrapper-14">Explore Eventfull</div>
              </div>
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
