import React, { useState, useEffect } from 'react';

import axios from "axios";
import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, message, Dropdown, theme, Tag, Table } from 'antd';
import { DeleteOutlined, EditOutlined, SmileOutlined, DownOutlined, CheckOutlined } from "@ant-design/icons";

import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { Login2 } from "../../icons/Login2";
import { CategoryDropDown } from "../../components/CategoryDropDown";

import { getJwtToken, saveJwtToken, removeJwtToken, returnToMainpage } from '../../helper/jwt.helper';

import { Route, Switch, useLocation } from 'react-router-dom'

import "./style.css";

export const VendorBooking = () => {

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

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/booking/getall`)
      .then((response) => {
        console.log(response);
        const data = [];
        for (let i = 0; i < response.data.length; ++i) {
          data.push({
            key: i.toString(),
            id: response.data[i]._id,
            companyName: response.data[i].companyName,
            customerName: response.data[i].customerName,
            email: response.data[i].email,
            phone: response.data[i].phone,
            startDatetime: response.data[i].startDatetime,
            endDatetime: response.data[i].endDatetime,
            status: response.data[i].status
          });
          setData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleApprove = (record) => {
    console.log('handleApprove', record);  
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/v1/booking/edit/${record.id}`, {
        userId: record.userId,
        companyName: record.companyName,
        customerName: record.customerName,
        email: record.email,
        phone: record.phone,
        startDatetime: record.startDatetime,
        endDatetime: record.endDatetime,
        status: 1
      })
      .then((result) => {
        console.log(result);
        setTimeout(() => {
          messageApi.open({
            type: 'success',
            content: 'Approved!',
            duration: 2,
          });
        }, 500);
        setTimeout(function() { window.location = "/vendor-booking/#anchor"; }, 500);
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
  };

  const handleDecline = (record) => {
    console.log('handleDecline', record);
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/v1/booking/edit/${record.id}`, {
        userId: record.userId,
        companyName: record.companyName,
        customerName: record.customerName,
        email: record.email,
        phone: record.phone,
        startDatetime: record.startDatetime,
        endDatetime: record.endDatetime,
        status: 2
      })
      .then((result) => {
        console.log(result);
        setTimeout(() => {
          messageApi.open({
            type: 'success',
            content: 'Declined!',
            duration: 2,
          });
        }, 500);
        setTimeout(function() { window.location = "/vendor-booking/#anchor"; }, 500);
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
  
  };

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      sorter: {
        compare: (a, b) => a.customerName - b.customerName,
      },
    },
    {
      title: "Start Date-time",
      dataIndex: "startDatetime",
      sorter: {
        compare: (a, b) => a.startDatetime - b.startDatetime,
      },
    },
    {
      title: "End Date-time",
      dataIndex: "endDatetime",
      sorter: {
        compare: (a, b) => a.endDatetime - b.endDatetime,
      },
    },
    {
      title: "Booking Status",
      dataIndex: "status",
      sorter: {
        compare: (a, b) => a.endDatetime - b.endDatetime,
      },
      render: (status) => (
        <span>
          <Tag
            color={
              status == 0 ? "orange" : status == 1 ? "green" : "gray"
            }
            key={status}
          >
            {status == 0 ? "New Request!" : status == 1 ? "Confirmed" : "Canceled"}
          </Tag>
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      render: (text, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: "Approve",
                icon: <CheckOutlined />,
                onClick: () => {
                  // (window.location.href = `/updateRealtor/${record.id}`)
                  handleApprove(record);
                }
              },
              {
                key: "2",
                label: "Decline",
                icon: <EditOutlined />,
                onClick: () => {
                  // (window.location.href = `/updateRealtor/${record.id}`)
                  handleDecline(record);
                }
              }
            ],
          }}
        >
          <a className="action-dropdown">...</a>
        </Dropdown>
      ),
    },
  ];
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

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
      <div className="vendor-booking">
        <div className="div-2">
          <div className="overlap">
            <img className="bg-img" alt="Bg img" src="/img/bgimg.png" />
            <a href='/'><img className="white-logo" alt="White logo" src="/img/whitelogo.png" /></a>
            
            <div className="navbar">
              <div className="text-wrapper-2"><a className="menu-link" href='/'>Home</a></div>
              <div className="text-wrapper-2"><a className="menu-link higlight" href='/vendor-booking'>Booking</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/vendor-company'>Company</a></div>
              <div className="text-wrapper-3"><a className="menu-link" href='/vendor-account'>My Profile</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/vendor-schedule'>Schedule</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/'>Help</a></div>
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

            {/* <div className="rectangle-2" /> */}
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
            
            <div
              style={{
                position: 'absolute',
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                width: 1400,
                top: 1085,
                left: 260
              }}
            >
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
              />
            </div>
            
            {/* <TableFlightList
              className="table-flight-list-version-a"
              flightDataRowDataRowCombinedDataRowPrimaryDivClassName="table-flight-list-instance"
              flightDataRowDataRowCombinedDataRowPrimaryText="Marcus"
              flightDataRowDataRowCombinedDataRowPrimaryText1="New Request!"
              flightDataRowDataRowCombinedDataRowPrimaryText2="New Request!"
              flightDataRowDataRowCombinedDataRowPrimaryText3="Candice"
              flightDataRowDataRowCombinedDataRowSecondaryHasDiv={false}
              flightDataRowDataRowCombinedDataRowSecondaryHasDiv1={false}
              flightDataRowDataRowCombinedDataRowSecondaryText="View Details"
              flightDataRowDataRowCombinedDataRowSecondaryVisible={false}
            />
            <DataRowDivider className="data-row-divider-3" dividerClassName="data-row-divider-4" />
            <FlightDataRow
              className="flight-data-row-9"
              dataRowCombinedDataRowCombinedClassName="flight-data-row-15"
              dataRowCombinedDataRowPrimaryDataRowPrimaryClassName="flight-data-row-11"
              dataRowCombinedDataRowPrimaryDivClassName="flight-data-row-10"
              dataRowCombinedDataRowPrimaryDivClassName1="flight-data-row-13"
              dataRowCombinedDataRowPrimaryDivClassName2="flight-data-row-14"
              dataRowCombinedDataRowPrimaryDivClassNameOverride="flight-data-row-10"
              dataRowCombinedDataRowPrimaryText="Oct 24th - Oct 25th, 2023"
              dataRowCombinedDataRowPrimaryText1="Canceled"
              dataRowCombinedDataRowPrimaryText2="7:35 AM - 12:15 PM"
              dataRowCombinedDataRowPrimaryText3="Candice"
              dataRowCombinedDataRowSecondaryDataRowSecondaryClassName="flight-data-row-11"
              dataRowCombinedDataRowSecondaryDivClassName="flight-data-row-10"
              dataRowCombinedDataRowSecondaryDivClassName1="flight-data-row-10"
              dataRowCombinedDataRowSecondaryDivClassNameOverride="flight-data-row-12"
              dataRowCombinedDataRowSecondaryHasDiv={false}
              dataRowCombinedDataRowSecondaryText=""
              dataRowCombinedDataRowSecondaryText1="value"
              dataRowCombinedDataRowSecondaryText2="View Details"
              stateProp="default"
              visible={false}
            />
            <div className="rectangle-8" />
            <div className="button-row">
              <Button
                buttonPrimaryIconClassName="button-2"
                className="button-instance"
                icon={false}
                iconOnly={false}
                size="large"
                stateProp="default"
                text="Confirm"
                type="secondary"
              />
              <Button
                buttonPrimaryIconClassName="button-4"
                className="button-3"
                icon={false}
                iconOnly={false}
                size="large"
                stateProp="inactive"
                text="Cancel"
                type="primary"
              />
            </div> */}

          </div>
          <footer className="footer">
            <div className="group-wrapper">
              <div className="group-3">
                <p className="p">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-9" />
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
                    <img className="img" alt="Group" src="/img/group-169.png" />
                  </div>
                </div>
                <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
              </div>
            </div>
          </footer>
          <div className="group-5">
            <div className="overlap-5">
              <div className="footer-head">
                <div className="rectangle-10" />
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
