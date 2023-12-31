import React, { useState, useEffect } from 'react';

import axios from "axios";

import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, message, Dropdown, Card, Col, Row, Pagination, List, DatePicker, Progress, Select } from 'antd';

import { DeleteOutlined, EditOutlined, SmileOutlined, DownOutlined } from "@ant-design/icons";

import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { Login2 } from "../../icons/Login2";
import { CategoryDropDown } from "../../components/CategoryDropDown";

import { useSearchParams } from 'react-router-dom'

import { getJwtToken, saveJwtToken, removeJwtToken } from '../../helper/jwt.helper';

import "./style.css";

const { Meta } = Card;

export const Vendors = () => {
  
  useEffect(()  => { document.body.classList.remove('login-style'); });

  const [messageApi, contextHolder] = message.useMessage();

  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(9);

  const [isHoverVendor, setHoverVendor] = React.useState(false);

  const [data, setData] = useState([]);

  const [queryParameters] = useSearchParams()

  useEffect(() => {

    console.log(queryParameters.get("type"));
    console.log(queryParameters.get("location"));

    let apiParams = 'getall'

    if(queryParameters.get("type") != '' && queryParameters.get("type") != null ){
      apiParams = "search-category/" + queryParameters.get("type");
    }
    else if(queryParameters.get("location") != '' && queryParameters.get("location") != null){
      apiParams = "search-location/" + queryParameters.get("location");
    }

    console.log(apiParams);

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/vendor-detail/${apiParams}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

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

  function handleDateChange(date) {
    if (date != null) {
      const eventDate = date.format("YYYY-MM-DD");
      const newData = { ...data };
      newData.eventDate = eventDate;
      console.log(newData);
      setData(newData);
    }
  }
  
  const handleChange = (value) => {
    if (value <= 1) { 
      setMinValue(0);
      setMaxValue(9);
    } else {
      setMinValue(maxValue);
      setMaxValue(value*9);
    }
  };

  function submit() {

    console.log(data);

    const urlParams = `?type=${data.category}&location=${data.location}`

    setTimeout(function() { window.location = `vendors/${urlParams}`; }, 1000);

  }

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
      <div className="vendors">
        <div className="div-2">
          <div className="overlap-3">
            <div className="top-rectangle">
              <img className="white-logo" alt="White logo" src="/img/whitelogo.png" />
            </div>
            <div className="group-2">
              <p className="slogans">Discover · Book · Celebrate Your Moments</p>
              <div className="rectangle-2" />
            </div>
            <div className="slogan">
              <div className="rectangle-3" />
              <div className="slogans-2">
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
            <div className="details">
              <div className="group-3">
                <div className="rectangle-wrapper">
                  <div className="rectangle-4" />
                </div>
                <div className="overlap-group-3">
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                  <div className="rectangle-7" />
                  <div className="rectangle-8" />
                </div>
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
            <div className="text-wrapper-8">Vendors</div>
            
            <div className="group-card site-card-wrapper">
              <Row gutter={16}>
                {data &&
                  data.length > 0 &&
                  data.slice(minValue, maxValue).map(item => (

                    <Col span={8}>
                      <a href={`/vendor-details?v=${item._id}`}>
                        <Card
                          hoverable
                          style={{ width: 350 }}
                          cover={<img alt="image" src={item.image} />}
                        >
                          <Meta title={item.companyName} description={item.description} />
                          <p className='card-viewprice'>{`Viewprice >>`}</p>
                        </Card>
                      </a>
                    </Col>
                  ))}
              </Row>

              <div className='vendors-pagination'>
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={9}
                  onChange={handleChange}
                  total={data.length}
                />
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="group-21">
              <div className="group-22">
                <p className="text-wrapper-16">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-17" />
                <div className="nav-wrap">
                  <div className="nav-list-item">
                    <div className="text-wrapper-17">Company</div>
                    <div className="frame-3">
                      <div className="text-wrapper-18">About Us</div>
                      <div className="text-wrapper-19">Contact Us</div>
                      <div className="text-wrapper-19">Follow Us</div>
                    </div>
                  </div>
                  <div className="nav-list-item-2">
                    <div className="text-wrapper-17">Parteners</div>
                    <div className="frame-4">
                      <div className="text-wrapper-18">Paradox Hotel Vancouver</div>
                      <div className="text-wrapper-19">Fairmont Empress</div>
                      <div className="text-wrapper-19">Chinook Photography</div>
                      <p className="text-wrapper-19">Connect in the 6 Events</p>
                    </div>
                  </div>
                  <div className="nav-list-item-3">
                    <p className="text-wrapper-17">Sign Up For Eventfull Updates</p>
                    <div className="group-23">
                      <div className="group-24">
                        <div className="overlap-group-5">
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
                <div className="group-25">
                  <div className="discover-book">
                    Discover
                    <br />
                    Book
                    <br />
                    Celebrate Your Moments
                  </div>
                  <img className="group-26" alt="Group" src="/img/group-169.png" />
                </div>
                <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
              </div>
            </div>
          </footer>
          <div className="overlap-9">
            <div className="footer-head">
              <div className="rectangle-18" />
            </div>
            <div className="text-wrapper-22">Explore Eventfull</div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};