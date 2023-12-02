import React, { useState, useEffect } from 'react';

import axios from "axios";
import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, Upload, DatePicker, Progress, message, Dropdown, Select, InputNumber } from 'antd';
import { DeleteOutlined, EditOutlined, SmileOutlined, DownOutlined } from "@ant-design/icons";

import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { Login2 } from "../../icons/Login2";
import { CategoryDropDown } from "../../components/CategoryDropDown";

import { getJwtToken, saveJwtToken, removeJwtToken } from '../../helper/jwt.helper';

import "./style.css";

export const MainPage = () => {

  useEffect(()  => { document.body.classList.remove('login-style'); });

  const [messageApi, contextHolder] = message.useMessage();

  const [isHoverVendor, setHoverVendor] = React.useState(false);

  const [data, setData] = useState({
    category  : "",
    location: "",
    capacity: "",
    eventDate: ""
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

  const handleSelectLocationChange = (value) => {
    console.log(`selected ${value}`);
    const newData = { ...data };
    newData['location'] = value;
    setData(newData);
  };

  const handleSelectTypeChange = (value) => {
    console.log(`selected ${value}`);
    const newData = { ...data };
    newData['category'] = value;
    setData(newData);
  };

  const handleSelectCapacityChange = (value) => {
    console.log(`selected ${value}`);
    const newData = { ...data };
    newData['capacity'] = value;
    setData(newData);
  };

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    // console.log(newData);
    setData(newData);
  }

  function handleDateChange(date) {
    if (date != null) {
      const eventDate = date.format("YYYY-MM-DD");
      const newData = { ...data };
      newData.eventDate = eventDate;
      console.log(newData);
      setData(newData);
    }
  }
  
  function submit() {

    console.log(data);

    // messageApi.open({
    //   type: 'success',
    //   content: 'Searching...',
    //   duration: 1
    // });

    const urlParams = `?type=${data.category}&location=${data.location}`

    setTimeout(function() { window.location = `vendors/${urlParams}`; }, 1000);

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
      <div className="main-page">
        <div className="div-2">
          <div className="overlap">
            <div className="top-rectangle">
              <div className="slogan">
                <div className="rectangle-2" />
                <div className="slogans">
                  Discover
                  <br />
                  Book
                  <br />
                  Celebrate Your Moments
                </div>
              </div>
              <div className="search-bar">
                <div className="frame">
                  <div className="frame-2">
                      
                    <div className="where">
                      <div className="group">
                        <Select
                            id="location"
                            placeholder="Where"
                            style={{ width: 322 }}
                            onChange={handleSelectLocationChange}
                            options={[{ value: 'vancouver', label: 'Vancouver' },
                                      { value: 'vancouverNorth', label: 'Vancouver North' },
                                      { value: 'vancouverWest', label: 'Vancouver West' },
                                      { value: 'burnaby', label: 'Burnaby' },
                                      { value: 'coquitlam', label: 'Coquitlam' },
                                      { value: 'surrey', label: 'Surrey' },
                                      { value: 'richmond', label: 'Richmond' }]}
                          />
                      </div>
                    </div>

                    <div className="overlap-wrapper">
                      <DatePicker id="eventDate" style={{ width: 328, marginTop:10, height:40, fontSize:0 }} placeholder="  When" onChange={(e) => handleDateChange(e)}/>
                    </div>
                    
                    <div className="overlap-wrapper">
                      <Select
                          id="category"
                          placeholder="Vendor Type"
                          style={{ width: 328, marginTop:10 }}
                          onChange={handleSelectTypeChange}
                          options={[{ value: 'venue', label: 'Venue' },
                                    { value: 'decoration', label: 'Decoration' },
                                    { value: 'catering', label: 'Catering' },
                                    { value: 'photography', label: 'Photography' },
                                    { value: 'planner', label: 'Event Planner' },
                                    { value: 'make-up', label: 'Makeup' }]}
                        />
                    </div>

                    <div className="guest-search">
                      <div className="overlap-3">
                        <div className="guest">
                          <Select
                            id="capacity"
                            placeholder="Guest"
                            style={{ width: 235, marginTop:10 }}
                            onChange={handleSelectCapacityChange}
                            options={[{ value: '10', label: '0-10' },
                                      { value: '20', label: '10-20' },
                                      { value: '50', label: '20-50' },
                                      { value: '100', label: '50-100' },
                                      { value: '200', label: '100-200' },
                                      { value: '500', label: '200-500' }]}
                          />
                        </div>
                        <button className="btn-search">
                          <Button type="primary" htmlType="submit" onClick={submit} style={{ width: 260, marginTop:10, height:38 }}>
                            Search
                          </Button>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="small-text">
                <p className="let-s-find-your">
                  <span className="span">
                    Let&#39;s find your event team
                    <br />
                  </span>
                  <span className="text-wrapper-8">
                    Search over 500 local professionals with locations, pricing, availability, and more ...
                  </span>
                </p>
                <div className="clients">
                  <p className="p">20 new vendors just added in our Eventfull family!</p>
                  <div className="overlap-4">
                    <div className="group-2">
                      <div className="overlap-group-4">
                        <img className="ellipse" alt="Ellipse" src="img/ellipse-31.png" />
                        <img className="ellipse-2" alt="Ellipse" src="img/ellipse-32.png" />
                        <img className="ellipse-3" alt="Ellipse" src="img/ellipse-33.png" />
                        <img className="ellipse-4" alt="Ellipse" src="img/ellipse-34.png" />
                        <img className="ellipse-5" alt="Ellipse" src="img/ellipse-35.png" />
                        <img className="ellipse-6" alt="Ellipse" src="img/ellipse-36.png" />
                        <div className="ellipse-7" />
                      </div>
                    </div>
                    <div className="text-wrapper-9">+</div>
                  </div>
                </div>
              </div>
            </div>
            <a href='/'><img className="white-logo" alt="White logo" src="img/whitelogo.png" /></a>
            {/* <Menu
              className="navbar"
              divClassName="menu-instance"
              divClassName1="menu-instance"
              divClassName2="menu-instance"
              divClassNameOverride="menu-instance"
              menuHome="home"
            /> */}
            <div className={`menu navbar`}>
              <div className={`div menu-home-home menu-instance`}><a className="menu-link" href='/'>Home</a></div>
              <div className={`div menu-home-home menu-instance`}><div className="menu-link vendor" href='/vendors' onClick={() => { setHoverVendor(!isHoverVendor); }}>Vendors</div></div>
              <div className={`text-wrapper-2 menu-home-0-home menu-instance`}><a className="menu-link" href='/about-us'>About Us</a></div>
              <div className={`text-wrapper-3 menu-home-1-home menu-instance`}><a className="menu-link" href='/princing'>Pricing</a></div>
            </div>
            
            {/* <LoginGroup
              className="login-group-instance"
              icon={<Login2 className="login-2-instance" />}
              whiteLogin="default"
            /> */}

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
              loginLink="/user-login"
              SignupLink="/user-signup"
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
          <div className="best-service">
            <div className="title">
              <div className="overlap-group-5">
                <img className="rectangle-4" alt="Rectangle" src="img/rectangle-159.svg" />
                <div className="text-wrapper-10">We Offer Best Services</div>
              </div>
            </div>
            <div className="services">
              <div className="professional">
                <p className="text-wrapper-11">
                  Our dedication to personalization ensures every event, from small to grand, receives our highest
                  expertise.
                </p>
                <div className="text-wrapper-12">Professional</div>
                <div className="overlap-group-6">
                  <div className="rectangle-5" />
                  <img className="ellipse-8" alt="Ellipse" src="img/ellipse-628.png" />
                </div>
              </div>
              <div className="variety">
                <div className="overlap-5">
                  <img className="rectangle-6" alt="Rectangle" src="img/rectangle-157.svg" />
                  <div className="rectangle-7" />
                  <p className="text-wrapper-13">Offers a wide range of event services tailored to your needs.</p>
                  <div className="rectangle-8" />
                  <div className="text-wrapper-14">Variety</div>
                  <img className="ellipse-9" alt="Ellipse" src="img/ellipse-629.png" />
                </div>
              </div>
              <div className="convenient">
                <div className="text-wrapper-15">Convenient</div>
                <div className="overlap-6">
                  <div className="rectangle-9" />
                  <img className="ellipse-8" alt="Ellipse" src="img/ellipse-630.png" />
                </div>
                <p className="text-wrapper-16">Delivers convenience through seamless event booking and coordination.</p>
              </div>
              <div className="security">
                <div className="overlap-7">
                  <div className="rectangle-10" />
                  <div className="text-wrapper-17">Security</div>
                  <img className="ellipse-8" alt="Ellipse" src="img/ellipse-631.png" />
                </div>
                <p className="text-wrapper-16">
                  Prioritizes website security to protect your information and ensure a safe browsing experience.
                </p>
              </div>
            </div>
          </div>
          <div className="categories">
            <div className="enjoy-planning-your">
              <div className="text-wrapper-18">CATEGORY</div>
              <div className="text-wrapper-19">Enjoy Planning Your Event</div>
            </div>
            <div className="venues">
              <div className="overlap-group-7">
                <div className="overlap-group-8">
                  <p className="qui-tempore">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                  <div className="text-wrapper-20">Explore Venues &gt;&gt;</div>
                </div>
                <div className="overlap-group-9">
                  <img className="rectangle-11" alt="Rectangle" src="img/rectangle-19377.png" />
                  <div className="text-wrapper-21">Popular Venues</div>
                </div>
              </div>
            </div>
            <div className="photo">
              <div className="overlap-group-7">
                <div className="overlap-group-8">
                  <p className="qui-tempore">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                  <div className="text-wrapper-20">Explore Venues &gt;&gt;</div>
                </div>
                <div className="overlap-group-9">
                  <img className="rectangle-11" alt="Rectangle" src="img/rectangle-19377-1.png" />
                  <div className="expert-photography">Expert Photography</div>
                </div>
              </div>
            </div>
            <div className="decorations">
              <div className="overlap-group-7">
                <div className="overlap-group-10">
                  <div className="text-wrapper-20">Explore Decorations &gt;&gt;</div>
                  <p className="qui-tempore-2">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                </div>
                <div className="overlap-group-9">
                  <img className="rectangle-11" alt="Rectangle" src="img/rectangle-19377-2.png" />
                  <div className="text-wrapper-21">
                    Elegant
                    <br />
                    decorations
                  </div>
                </div>
              </div>
            </div>
            <div className="makeup">
              <div className="overlap-group-7">
                <div className="overlap-group-10">
                  <div className="text-wrapper-20">Explore Decorations &gt;&gt;</div>
                  <p className="qui-tempore-2">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                </div>
                <div className="overlap-group-9">
                  <img className="rectangle-11" alt="Rectangle" src="img/rectangle-19377-3.png" />
                  <div className="text-wrapper-21">
                    Stylish
                    <br />
                    makeup
                  </div>
                </div>
              </div>
            </div>
            <div className="catering">
              <div className="overlap-group-7">
                <div className="overlap-group-11">
                  <p className="qui-tempore-3">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                  <div className="text-wrapper-20">Explore Catering&gt;&gt;</div>
                </div>
                <div className="overlap-group-9">
                  <img className="rectangle-12" alt="Rectangle" src="img/rectangle-19377-4.png" />
                  <div className="text-wrapper-21">Generous Catering</div>
                </div>
              </div>
            </div>
            <div className="event-planner">
              <div className="overlap-group-7">
                <div className="overlap-group-11">
                  <p className="qui-tempore-3">Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.</p>
                  <div className="text-wrapper-20">Explore Catering&gt;&gt;</div>
                </div>
                <div className="overlap-group-9">
                  <img className="rectangle-11" alt="Rectangle" src="img/rectangle-19377-5.png" />
                  <div className="one-stop-event">One-stop Event Planner</div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore">
            <div className="explore-inspirations">
              <div className="group-wrapper">
                <div className="group-3">
                  <div className="overlap-group-12">
                    {/* <img className="line" alt="Line" src="img/line-3.svg" /> */}
                    <div className="text-wrapper-22">Explore Inspirations</div>
                  </div>
                  <div className="button-search">
                    <div className="text-wrapper-23">View Ideas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="explore-venues">
              <div className="group-wrapper">
                <div className="group-4">
                  <div className="overlap-group-13">
                    {/* <img className="line-2" alt="Line" src="img/line-8.svg" /> */}
                    <div className="text-wrapper-22">Explore Cities</div>
                  </div>
                  <div className="button-search-2">
                    <div className="text-wrapper-23">View Ideas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="group-5">
              <div className="group-6">
                <p className="text-wrapper-24">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-13" />
                <div className="nav-wrap">
                  <div className="nav-list-item">
                    <div className="text-wrapper-25">Company</div>
                    <div className="frame-3">
                      <a href='/'><div className="text-wrapper-26">About Us</div></a>
                      <a href='/'><div className="text-wrapper-27">Contact Us</div></a>
                      <a href='/'><div className="text-wrapper-27">Follow Us</div></a>
                    </div>
                  </div>
                  <div className="nav-list-item-2">
                    <div className="text-wrapper-25">Parteners</div>
                    <div className="frame-4">
                      <a href='/'><div className="text-wrapper-26">Paradox Hotel Vancouver</div></a>
                      <a href='/'><div className="text-wrapper-27">Fairmont Empress</div></a>
                      <a href='/'><div className="text-wrapper-27">Chinook Photography</div></a>
                      <p className="text-wrapper-27">Connect in the 6 Events</p>
                    </div>
                  </div>
                  <div className="nav-list-item-3">
                    <p className="text-wrapper-25">Sign Up For Eventfull Updates</p>
                    <div className="group-7">
                      <div className="group-8">
                        <div className="overlap-group-14">
                          <div className="text-wrapper-28">Your email address</div>
                          <div className="overlap-8">
                            <div className="text-wrapper-29">Subscribe</div>
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
                <div className="group-9">
                  <div className="discover-book">
                    Discover
                    <br />
                    Book
                    <br />
                    Celebrate Your Moments
                  </div>
                  <img className="group-10" alt="Group" src="img/group-169.png" />
                </div>
                <img className="original-logo" alt="Original logo" src="img/originallogo.png" />
              </div>
            </div>
          </footer>
          <div className="overlap-9">
            <div className="footer-head">
              <div className="rectangle-14" />
            </div>
            <div className="text-wrapper-30">Explore Eventfull</div>
          </div>
          <div className="overlap-10">
            <div className="top-vendors">
              <div className="enjoy-planning-your-2">
                <div className="trending">TRENDING</div>
                <div className="text-wrapper-19">Top Star Vendors</div>
              </div>
              <div className="group-11">
                <div className="div-qodef-e-media" />
                <div className="div-qodef-e-info">
                  <div className="text-wrapper-31">VENUES</div>
                  <div className="text-wrapper-32">/</div>
                  <div className="a">
                    <div className="text-wrapper-33">EVENT BOOKING</div>
                  </div>
                </div>
                <div className="a-qodef-e-title-link">
                  <div className="stanley-park">STANLEY PARK PAVILION</div>
                </div>
                <div className="div-qodef-e-media-2" />
                <div className="div-qodef-e-info-2">
                  <div className="text-wrapper-34">CATERING</div>
                  <div className="text-wrapper-32">/</div>
                  <div className="food-service-wrapper">
                    <div className="text-wrapper-33">FOOD SERVICE</div>
                  </div>
                </div>
                <div className="joey-restaurant-wrapper">
                  <div className="joey-restaurant">JOEY RESTAURANT</div>
                </div>
                <div className="div-qodef-e-media-3" />
                <div className="div-qodef-e-info-3">
                  <div className="text-wrapper-35">DESSERT TABLE</div>
                  <div className="text-wrapper-36">/</div>
                  <div className="a-2">
                    <div className="text-wrapper-33">FOOD SERVICE</div>
                  </div>
                </div>
                <div className="a-qodef-e-title-link-2">
                  <div className="text-wrapper-37">GOOD MORNING BAKERY</div>
                </div>
                <div className="div-qodef-e-media-4" />
                <div className="div-qodef-e-info-4">
                  <div className="text-wrapper-38">PHOTOGRAPHY</div>
                  <div className="text-wrapper-39">/</div>
                  <div className="design-wrapper">
                    <div className="design">DESIGN</div>
                  </div>
                </div>
                <div className="ian-kim-photo-studio-wrapper">
                  <div className="ian-kim-photo-studio">IAN KIM PHOTO STUDIO</div>
                </div>
                <div className="div-qodef-e-media-5" />
                <div className="div-qodef-e-info-5">
                  <div className="makeup-2">MAKEUP</div>
                  <div className="text-wrapper-40">/</div>
                  <div className="a-3">
                    <div className="text-wrapper-33">DESIGN</div>
                  </div>
                </div>
                <div className="yes-mona-makeup-wrapper">
                  <div className="yes-mona-makeup">YES MONA MAKEUP</div>
                </div>
                <div className="div-qodef-e-media-6" />
                <div className="div-qodef-e-info-6">
                  <div className="catering-2">CATERING</div>
                  <div className="text-wrapper-41">/</div>
                  <div className="a-4">
                    <div className="text-wrapper-33">FOOD SERVICE</div>
                  </div>
                </div>
                <div className="mr-paris-bakery-wrapper">
                  <div className="mr-paris-bakery">MR. PARIS BAKERY</div>
                </div>
                <div className="div-qodef-e-media-7" />
                <div className="div-qodef-e-info-7">
                  <div className="photography">PHOTOGRAPHY</div>
                  <div className="text-wrapper-42">/</div>
                  <div className="a-5">
                    <div className="text-wrapper-33">DESIGN</div>
                  </div>
                </div>
                <div className="memotime-photography-wrapper">
                  <div className="memotime-photography">MEMOTIME PHOTOGRAPHY</div>
                </div>
                <div className="div-qodef-e-media-8" />
                <div className="div-qodef-e-info-8">
                  <div className="text-wrapper-34">PLANNER</div>
                  <div className="text-wrapper-41">/</div>
                  <div className="one-stop-wrapper">
                    <div className="text-wrapper-33">ONE-STOP</div>
                  </div>
                </div>
                <div className="umbrella-events-wrapper">
                  <div className="umbrella-events">UMBRELLA EVENTS</div>
                </div>
                <div className="div-qodef-e-info-9">
                  <div className="text-wrapper-35">DECORATION</div>
                  <div className="text-wrapper-36">/</div>
                  <div className="flower-design-wrapper">
                    <div className="text-wrapper-33">FLOWER DESIGN</div>
                  </div>
                </div>
                <div className="sala-floral-wrapper">
                  <div className="sala-floral">SALA FLORAL</div>
                </div>
              </div>
            </div>
            <img className="unsplash" alt="Unsplash" src="img/unsplash-30uoqdm5qw0.png" />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};
