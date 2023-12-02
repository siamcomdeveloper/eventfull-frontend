import React, { useState, useEffect } from 'react';
import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { Login2 } from "../../icons/Login2";
import { CategoryDropDown } from "../../components/CategoryDropDown";

import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, message, Dropdown } from 'antd';
import { DeleteOutlined, EditOutlined, SmileOutlined, DownOutlined } from "@ant-design/icons";
import { getJwtToken, saveJwtToken, removeJwtToken } from '../../helper/jwt.helper';

import "./style.css";

export const AboutUs = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const [isHoverVendor, setHoverVendor] = React.useState(false);

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
      key: "1",
      label: "Dashboard",
      onClick: () =>
        (window.location.href = `/dashboard`)
    },
    {
      key: '2',
      label: "Sign out",
      onClick: () => { signOut(); },
    }
  ];

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
      <div className="about-us">
        <div className="div-2">
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="overlap">
            <div className="overlap">
              <div className="top-rectangle">
                <div className="overlap-group-2">
                  <img className="bg-img" alt="Bg img" src="bgimg.png" />
                  <div className="slogan">
                    <div className="rectangle-4" />
                    <div className="slogans">
                      Discover
                      <br />
                      Book
                      <br />
                      Celebrate Your Moments
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-4">About us</div>
              <img className="ellipse" alt="Ellipse" src="./ellipse-634.png" />
              {/* <Menu
                className="navbar"
                divClassName="menu-instance"
                divClassName1="menu-instance"
                divClassName2="menu-instance"
                divClassNameOverride="menu-instance"
                menuHome="about-us"
              />
              <img className="white-logo" alt="White logo" src="/img/whitelogo.png" />
              <LoginGroup
                className="login-group-instance"
                icon={<Login2 className="login-2-instance" />}
                whiteLogin="default"
              /> */}
              <a href='/'><img className="white-logo" alt="White logo" src="img/whitelogo.png" /></a>
              {/* <Menu
                className="navbar"
                divClassName="menu-instance"
                divClassName1="menu-instance"
                divClassName2="menu-instance"
                divClassNameOverride="menu-instance"
                menuHome="home"
              />
              <LoginGroup
                className="login-group-instance"
                icon={<Login2 className="login-2-instance" />}
                whiteLogin="default"
              /> */}
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
              />
              }

              { isHoverVendor ?
                <CategoryDropDown
                  categoryDropDownClassName="design-component-instance-node"
                  className="category-drop-down-instance"
                  spanClassName="category-drop-down-2"
                /> : <div></div>
              }
            </div>
            <div className="context">
              <div className="discover">DISCOVER</div>
              <div className="overlap-2">
                <p className="p">We Provide You Best Vendor Booking Experiences</p>
                <div className="button-search">
                  <div className="text-wrapper-5">View Vendors</div>
                </div>
                <p className="text-wrapper-6">
                  Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                  Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
                  illum aut optio quibusdam!
                </p>
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <img className="img" alt="Rectangle" src="/img/rectangle-159.svg" />
            <div className="text-wrapper-7">We Offer Best Services</div>
          </div>
          <div className="text-wrapper-8">Our Story</div>
          <div className="professional">
            <p className="text-wrapper-9">
              Our dedication to personalization ensures every event, from small to grand, receives our highest expertise.
            </p>
            <div className="text-wrapper-10">Professional</div>
            <div className="overlap-4">
              <div className="rectangle-5" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-628.png" />
            </div>
          </div>
          <div className="variety">
            <div className="overlap-5">
              <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-157.svg" />
              <div className="rectangle-7" />
              <p className="text-wrapper-11">Offers a wide range of event services tailored to your needs.</p>
              <div className="rectangle-8" />
              <div className="text-wrapper-12">Variety</div>
              <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-629.png" />
            </div>
          </div>
          <div className="text-wrapper-13">Convenient</div>
          <div className="overlap-6">
            <div className="rectangle-9" />
            <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-630.png" />
          </div>
          <p className="text-wrapper-14">Delivers convenience through seamless event booking and coordination.</p>
          <div className="security">
            <div className="overlap-7">
              <div className="rectangle-10" />
              <div className="text-wrapper-15">Security</div>
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-631.png" />
            </div>
            <p className="text-wrapper-16">
              Prioritizes website security to protect your information and ensure a safe browsing experience.
            </p>
          </div>
          <div className="explore">
            <div className="explore-inspirations">
              <div className="group-wrapper">
                <div className="group">
                  <div className="overlap-group-3">
                    {/* <img className="line" alt="Line" src="/img/line-3.svg" /> */}
                    <div className="text-wrapper-17">Explore Inspirations</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-18">View Ideas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="explore-venues">
              <div className="group-wrapper">
                <div className="group-2">
                  <div className="overlap-group-4">
                    {/* <img className="line-2" alt="Line" src="/img/line-8.svg" /> */}
                    <div className="text-wrapper-17">Explore Cities</div>
                  </div>
                  <div className="button-search-2">
                    <div className="text-wrapper-18">View Ideas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="group-3">
              <div className="group-4">
                <p className="text-wrapper-19">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-11" />
                <div className="nav-wrap">
                  <div className="nav-list-item">
                    <div className="text-wrapper-20">Company</div>
                    <div className="frame">
                      <div className="text-wrapper-21">About Us</div>
                      <div className="text-wrapper-22">Contact Us</div>
                      <div className="text-wrapper-22">Follow Us</div>
                    </div>
                  </div>
                  <div className="nav-list-item-2">
                    <div className="text-wrapper-20">Parteners</div>
                    <div className="frame-2">
                      <div className="text-wrapper-21">Paradox Hotel Vancouver</div>
                      <div className="text-wrapper-22">Fairmont Empress</div>
                      <div className="text-wrapper-22">Chinook Photography</div>
                      <p className="text-wrapper-22">Connect in the 6 Events</p>
                    </div>
                  </div>
                  <div className="nav-list-item-3">
                    <p className="text-wrapper-20">Sign Up For Eventfull Updates</p>
                    <div className="group-5">
                      <div className="group-6">
                        <div className="overlap-group-5">
                          <div className="text-wrapper-23">Your email address</div>
                          <div className="overlap-8">
                            <div className="text-wrapper-24">Subscribe</div>
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
                <div className="group-7">
                  <div className="discover-book">
                    Discover
                    <br />
                    Book
                    <br />
                    Celebrate Your Moments
                  </div>
                  <img className="group-8" alt="Group" src="/img/group-169.png" />
                </div>
                <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
              </div>
            </div>
          </footer>
          <div className="overlap-9">
            <div className="rectangle-12" />
            <div className="rectangle-13" />
            <p className="welcome-to-eventfull">
              <span className="span">
                Welcome to Eventfull, the stage where your events come to life with elegance and ease. We specialize in
                making your event planning journey seamless and memorable. With Eventfull, you can effortlessly discover,
                book, and curate your dream event, all at your fingertips. Our platform empowers you to find the ideal
                vendors based on your event schedule, location, type, and budget. And, when the curtain falls and the
                applause resounds, you can share your magical moments and vendor reviews within our vibrant community. For
                vendors, Eventfull offers a stage to showcase your services, secure bookings with ease, and share your
                creative work with a passionate audience. Join us on this enchanting journey, where every event is a
                masterpiece waiting to be crafted, and every memory is a symphony of joy. <br />
                <br />
              </span>
              <span className="text-wrapper-25">Eventfull: Where Your Events Find Their Perfect Note.</span>
            </p>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};