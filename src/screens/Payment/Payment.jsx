import React, { useState, useEffect } from 'react';

import axios from "axios";
import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, message, Dropdown } from 'antd';
import { DeleteOutlined, EditOutlined, SmileOutlined, DownOutlined } from "@ant-design/icons";

import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { Login2 } from "../../icons/Login2";
import { CategoryDropDown } from "../../components/CategoryDropDown";

import { getJwtToken, saveJwtToken, removeJwtToken, returnToMainpage } from '../../helper/jwt.helper';

import { Route, Switch, useLocation } from 'react-router-dom'

import "./style.css";

export const Payment = () => {

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
    email: "",
    password: "",
  });

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
          setTimeout(() => {
            messageApi.open({
              type: 'success',
              content: 'Log in successful!',
              duration: 2,
            });
          }, 500);
          setTimeout(function() { window.location = "/vendor-account"; }, 1000);
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
      { getJwtToken() ?
      <div className="payment">
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
                    {/* <a className="login-btn" href='/user-login'>
                      <Login2 className="login-2-instance" />
                    </a> */}
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

            { isHoverVendor ?
              <CategoryDropDown
                categoryDropDownClassName="design-component-instance-node"
                className="category-drop-down-instance"
                spanClassName="category-drop-down-2"
              /> : <div></div>
            }

            <div className="rectangle-2" />
            <a href='/mybooking/#anchor'><div className="rectangle-3" /></a>
            <a href='/myprofile/#anchor'><div className="rectangle-4" /></a>
            <a href='/subscribe/#anchor'><div className="rectangle-5" /></a>
            <a href='/plans/#anchor'><div className="rectangle-6" /></a>
            <div className="group" id="anchor">
              <a href='/mybooking/#anchor'><div className="text-wrapper-4">My Bookings</div></a>
              <a href='/myprofile/#anchor'><div className="text-wrapper-5">My Profile</div></a>
              <a href='/subscribe/#anchor'><div className="text-wrapper-6">Subscription</div></a>
              <a href='/plans/#anchor'><div class="text-wrapper-7">Get Eventfull Pro</div></a>
            </div>

            <div className="group-wrapper">
              <div className="group-2">
                <img style={{ width: 1342 }}  src="/img/payment-image.png" />
                {/* <div className="text-wrapper-8">Plans</div>
                <div className="overlap-group">
                  <div className="text-wrapper-9">Book Vendors</div>
                  <p className="p">Book a vendor based on your need . No limits.</p>
                </div>
                <div className="overlap-2">
                  <div className="text-wrapper-9">View Price</div>
                  <div className="group-3">
                    <div className="group-4" />
                    <div className="group-5" />
                  </div>
                  <p className="p">Choose your vendors quickly and conveniently.</p>
                </div>
                <div className="overlap-3">
                  <div className="text-wrapper-10">Send Booking Request</div>
                  <p className="p">Send booking request to your preferred vendors.</p>
                </div>
                <p className="text-wrapper-11">For power users who want to event more.</p>
                <div className="terms-of-service">
                  Terms of Service
                  <br />
                  Privacy Policy
                </div>
                <div className="rectangle-7" />
                <div className="group-6">
                  <div className="text-wrapper-12">Premium</div>
                  <img className="element" alt="Element" src="/img/1.png" />
                </div>
                <div className="frame">
                  <div className="overlap-group-wrapper">
                    <div className="element-per-month-paid-wrapper">
                      <p className="div-3">
                        <span className="span">
                          $0
                          <br />
                        </span>
                        <span className="text-wrapper-13">
                          per month
                          <br />
                          paid monthly
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-4">
                      <img className="yes-svgrepo-com" alt="Yes svgrepo com" src="/img/yes-svgrepo-com-5.svg" />
                      <p className="div-3">
                        <span className="span">
                          $5.49
                          <br />
                        </span>
                        <span className="text-wrapper-13">
                          per month
                          <br />
                          paid monthly
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="element-per-year-paid-wrapper">
                      <p className="div-3">
                        <span className="span">
                          $49.99
                          <br />
                        </span>
                        <span className="text-wrapper-13">
                          per year
                          <br />
                          paid annually
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-5">
                    <div className="text-wrapper-14">Subscribe</div>
                  </div>
                </div>
                <img className="img" alt="Yes svgrepo com" src="/img/yes-svgrepo-com-4.svg" />
                <img className="yes-svgrepo-com-2" alt="Yes svgrepo com" src="/img/yes-svgrepo-com-3.svg" />
                <img className="yes-svgrepo-com-3" alt="Yes svgrepo com" src="/img/yes-svgrepo-com-2.svg" />
                <div className="group-7">
                  <div className="overlap-6">
                    <div className="view-vendor-s">View vendor&#39;s availability calendar.</div>
                    <img className="yes-svgrepo-com-4" alt="Yes svgrepo com" src="/img/yes-svgrepo-com-1.svg" />
                  </div>
                </div>
                <div className="group-8">
                  <div className="overlap-6">
                    <div className="view-vendor-s">View vendor&#39;s availability calendar.</div>
                    <img className="yes-svgrepo-com-4" alt="Yes svgrepo com" src="/img/yes-svgrepo-com.svg" />
                  </div>
                </div> */}
              </div>
            </div>
            {/* <Menu
              className="navbar"
              divClassName="menu-instance"
              divClassName1="menu-instance"
              divClassName2="menu-instance"
              divClassNameOverride="menu-instance"
              menuHome="default"
            />

            <div className="login-group">
              <div className="overlap-7">
                <div className="login">
                  <div className="ellipse" />
                  <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-8.svg" />
                </div>
                <div className="text-wrapper-15">MyAccount</div>
              </div>
            </div> */}
            
          </div>
          <footer className="footer">
            <div className="group-9">
              <div className="group-10">
                <p className="text-wrapper-16">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-8" />
                <div className="nav-wrap">
                  <div className="nav-list-item">
                    <div className="text-wrapper-17">Company</div>
                    <div className="frame-2">
                      <div className="text-wrapper-18">About Us</div>
                      <div className="text-wrapper-19">Contact Us</div>
                      <div className="text-wrapper-19">Follow Us</div>
                    </div>
                  </div>
                  <div className="nav-list-item-2">
                    <div className="text-wrapper-17">Parteners</div>
                    <div className="frame-3">
                      <div className="text-wrapper-18">Paradox Hotel Vancouver</div>
                      <div className="text-wrapper-19">Fairmont Empress</div>
                      <div className="text-wrapper-19">Chinook Photography</div>
                      <p className="text-wrapper-19">Connect in the 6 Events</p>
                    </div>
                  </div>
                  <div className="nav-list-item-3">
                    <p className="text-wrapper-17">Sign Up For Eventfull Updates</p>
                    <div className="group-11">
                      <div className="group-12">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-20">Your email address</div>
                          <div className="overlap-8">
                            <div className="text-wrapper-21">Subscribe</div>
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
                <div className="group-13">
                  <div className="discover-book">
                    Discover
                    <br />
                    Book
                    <br />
                    Celebrate Your Moments
                  </div>
                  <img className="group-14" alt="Group" src="/img/group-169.png" />
                </div>
                <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
              </div>
            </div>
          </footer>
          <div className="group-15">
            <div className="overlap-9">
              <div className="footer-head">
                <div className="rectangle-9" />
              </div>
              <div className="text-wrapper-22">Explore Eventfull</div>
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