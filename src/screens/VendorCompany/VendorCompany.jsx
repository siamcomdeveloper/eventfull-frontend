import React, { useState, useEffect } from 'react';

import axios from "axios";
import { ConfigProvider, Layout, Form, Input, Button, Space, Checkbox, Divider, Upload, DatePicker, Progress, message, Dropdown, Select, InputNumber } from 'antd';
import { DeleteOutlined, EditOutlined, SmileOutlined, DownOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import moment from "moment";

import { LoginGroup } from "../../components/LoginGroup";
import { Menu } from "../../components/Menu";
import { Login2 } from "../../icons/Login2";
import { CategoryDropDown } from "../../components/CategoryDropDown";

import { getJwtToken, saveJwtToken, removeJwtToken, returnToMainpage } from '../../helper/jwt.helper';

import { Route, Switch, useLocation } from 'react-router-dom'

import "./style.css";

const { TextArea } = Input;

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

export const VendorCompany = () => {
  
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
    companyName: "",
    contactName: "",
    category  : "",
    subCategory: "",
    description: "",
    serviceDescription: "",
    location: "",
    minPrice: "",
    maxPrice: "",
    maxCapacity: "",
    emailAddress: "",
    phoneNumber: "",
    streetAddress: "",
    imgUrl: "",
    imgUrl1: "",
    imgUrl2: "",
    imgUrl3: "",
  });

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/vendor-detail/getinfo`, {
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
      companyName: data.companyName,
      contactName: data.contactName,
      category  : data.category ,
      subCategory: data.subCategory,
      description: data.description,
      serviceDescription: data.serviceDescription,
      location: data.location,
      minPrice: data.minPrice,
      maxPrice: data.maxPrice,
      maxCapacity: data.maxCapacity,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
      streetAddress: data.streetAddress,
      imgUrl: data.imgUrl,
      imgUrl1: data.imgUrl1,
      imgUrl2: data.imgUrl2,
      imgUrl3: data.imgUrl3
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

  const handleSelectChange = (value) => {
    console.log(`selected ${value}`);
    const newData = { ...data };
    newData['location'] = value;
    setData(newData);
  };

  const handleSelectCategoryChange = (value) => {
    console.log(`selected ${value}`);
    value = value.split(',');
    console.log(value);
    const newData = { ...data };
    newData['category'] = value[0];
    newData['subCategory'] = value[1];
    setData(newData);
  };

  function submit() {

    messageApi.open({
      type: 'saving',
      content: 'saving...',
      duration: 0.5
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/vendor-detail/save`, {
        _id: data._id,
        userId: getJwtToken(),
        companyName: data.companyName,
        contactName: data.contactName,
        category  : data.category ,
        subCategory: data.subCategory,
        description: data.description,
        serviceDescription: data.serviceDescription,
        location: data.location,
        minPrice: data.minPrice,
        maxPrice: data.maxPrice,
        maxCapacity: data.maxCapacity,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber,
        streetAddress: data.streetAddress,
        imgUrl: data.imgUrl,
        imgUrl1: data.imgUrl1,
        imgUrl2: data.imgUrl2,
        imgUrl3: data.imgUrl3,
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

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);

  const uploadImage = async options => {
    const { onSuccess, onError, file, onProgress } = options;

    let formData = new FormData();
    formData.append('file', file);
    formData.append('domain', 'POST');
    formData.append('filename', file.name );
    
    console.log(formData);

    const config = {
      headers: { "content-type": "application/json" },
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/file/upload`,
        formData,
        config
      );
      onSuccess("Ok");
      console.log("server res: ", res);

      const newData = { ...data };
      newData['imgUrl'] = res.data.url;
      console.log(newData);
      setData(newData);

    } catch (err) {
      console.log("Error: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };

  const handleOnChange = ({ file, fileList, event }) => {
    setDefaultFileList(fileList);
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
      <div className="vendor-company">
        <div className="div">
          <div className="overlap">
            <img className="bg-img" alt="Bg img" src="/img/bgimg.png" />
            <a href='/'><img className="white-logo" alt="White logo" src="/img/whitelogo.png" /></a>
            
            <div className="navbar">
              <div className="text-wrapper-2"><a className="menu-link" href='/'>Home</a></div>
              <div className="text-wrapper-2"><a className="menu-link" href='/vendor-booking'>Booking</a></div>
              <div className="text-wrapper-2"><a className="menu-link higlight" href='/vendor-company'>Company</a></div>
              <div className="text-wrapper-3"><a className="menu-link" href='/vendor-account'>My Profile</a></div>
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
                <div className="abc">Company</div>
              </div>

              <Form
                onFinish={() => submit()}
                form={form}
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
                style={{marginTop:'20px', marginLeft:'40px'}}
              >
                <div className='frame-9'>

                  
                  <Form.Item
                    name="companyName"
                    label="Company Name"
                    className='text-wrapper-3'
                  >
                    <Input id="companyName" placeholder="Company name*" value={data.companyName} onChange={(e) => handle(e)}/>
                  </Form.Item>
                  
                  <Select
                    value={data.category+","+data.subCategory}
                    style={{ width: 530 }}
                    onChange={handleSelectCategoryChange}
                    className='category-select'
                    placeholder="Vender Type"
                    options={[
                      {
                        label: 'Venue',
                        options: [
                          { label: 'Hotel', value: 'venue,hotel' },
                          { label: 'Winery', value: 'venue,winery' },
                          { label: 'Park', value: 'venue,park' },
                          { label: 'Castle', value: 'venue,castle' },
                        ],
                      },
                      {
                        label: 'Decoration',
                        options: [
                          { label: 'Balloon', value: 'decoration,balloon' },
                          { label: 'Floral', value: 'decoration,floral' },
                          { label: 'Furniture', value: 'decoration,furniture' },
                          { label: 'Signage and Banners', value: 'decoration,signageAndBanners' },
                        ],
                      },
                      {
                        label: 'Catering',
                        options: [
                          { label: 'Buffet', value: 'catering,buffet' },
                          { label: 'Food Stations', value: 'catering,foodStations' },
                          { label: 'Cocktail Receptions', value: 'catering,cocktail' },
                          { label: 'Outdoor BBQ', value: 'catering,BBQ' },
                        ],
                      },
                      {
                        label: 'Photography',
                        options: [
                          { label: 'Wedding', value: 'photography,wedding' },
                          { label: 'Portrait', value: 'photography,portrait' },
                          { label: 'Commercial', value: 'photography,commercial' },
                          { label: 'Event', value: 'photography,event' },
                        ],
                      },
                      {
                        label: 'Planner',
                        options: [
                          { label: 'Wedding', value: 'planner,wedding' },
                          { label: 'Corporate Event', value: 'planner,corporate' },
                          { label: 'Social Event', value: 'planner,social' },
                          { label: 'House Party', value: 'planner,houseParty' },
                        ],
                      },
                      {
                        label: 'Make-up',
                        options: [
                          { label: 'Bridal', value: 'make-up,bridal' },
                          { label: 'Fashion', value: 'make-up,fashion' },
                          { label: 'Beauty', value: 'make-up,beauty' },
                          { label: 'Special Effects', value: 'make-up,specialEffects' },
                        ],
                      },
                    ]}
                  />
                  
                  <TextArea
                    showCount
                    maxLength={1500}
                    id="description"
                    onChange={(e) => handle(e)}
                    value={data.description}
                    placeholder="Enter your company description here..."
                    style={{ width: 500, height: 150, resize: 'none' }}
                  />

                  <TextArea
                    showCount
                    maxLength={500}
                    onChange={(e) => handle(e)}
                    id="serviceDescription"
                    value={data.serviceDescription}
                    placeholder="Enter your service description here..."
                    style={{ width: 500, height: 150, resize: 'none' }}
                  />

                  <Select
                    id="location"
                    value={data.location}
                    placeholder="Location"
                    style={{ width: 530, marginTop:20 }}
                    onChange={handleSelectChange}
                    options={[{ value: 'vancouver', label: 'Vancouver' },
                              { value: 'vancouverNorth', label: 'Vancouver North' },
                              { value: 'vancouverWest', label: 'Vancouver West' },
                              { value: 'burnaby', label: 'Burnaby' },
                              { value: 'coquitlam', label: 'Coquitlam' },
                              { value: 'surrey', label: 'Surrey' },
                              { value: 'richmond', label: 'Richmond' }]}
                  />

                  <Form.Item
                    name="minPrice"
                    label="Min price"
                    style={{marginTop:5, marginBottom:5}}
                    className='text-wrapper-3'
                  >
                    <Input id="minPrice" placeholder="Min price" value={data.minPrice} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item
                    name="maxPrice"
                    label="Max price"
                    style={{marginTop:5, marginBottom:5}}
                    className='text-wrapper-3'
                  >
                    <Input id="maxPrice" placeholder="Max price" value={data.maxPrice} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item
                    name="maxCapacity"
                    label="Max capacity "
                    style={{marginTop:5, marginBottom:15}}
                    className='text-wrapper-3'
                  >
                    <Input id="maxCapacity" placeholder="Max capacity " value={data.maxCapacity} onChange={(e) => handle(e)}/>
                  </Form.Item>


                  <div className="title">
                    <div className="abc" style={{left:30}}>Contact</div>
                  </div>
                  
                  <Form.Item
                    name="contactName"
                    label="Contact name"
                    style={{marginTop:0, marginBottom:5}}
                    className='text-wrapper-3'
                  >
                    <Input id="contactName" placeholder="Contact name" value={data.contactName} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item
                    name="emailAddress"
                    label="Email address"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      }
                    ]}
                    className='text-wrapper-3'
                    style={{marginTop:5, marginBottom:5}}
                  >
                    <Input id="emailAddress" placeholder="Email address" value={data.emailAddress} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item
                    name="phoneNumber"
                    label="Phone number"
                    className='text-wrapper-3'
                    style={{marginTop:5, marginBottom:5}}
                  >
                    <Input id="phoneNumber" placeholder="Phone number" value={data.phoneNumber} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item
                    name="streetAddress"
                    label="Street address"
                    className='text-wrapper-3'
                    style={{marginTop:5, marginBottom:5}}
                  >
                    <Input id="streetAddress" placeholder="Street address" value={data.streetAddress} onChange={(e) => handle(e)}/>
                  </Form.Item>

                  <Form.Item style={{ width: 125 }} name='imgUrlx' label="Images" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload
                      accept="image/*"
                      customRequest={uploadImage}
                      onChange={handleOnChange}
                      listType="picture-card"
                      defaultFileList={defaultFileList}
                      className="image-upload-grid"
                    >
                    {defaultFileList.length >= 1 ? null : <FontAwesomeIcon icon={icon({ name: "plus" })} />}
                    </Upload>
                    {progress > 0 ? <Progress percent={progress} /> : null}
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
                <p className="text-wrapper-17">Copyright @ Eventfull 2023. All Rights Reserved.</p>
                <div className="rectangle-10" />
                <div className="overlap-3">
                  <div className="nav-wrap">
                    <div className="nav-list-item">
                      <div className="text-wrapper-18">Company</div>
                      <div className="frame-7">
                        <div className="text-wrapper-19">About Us</div>
                        <div className="text-wrapper-20">Contact Us</div>
                        <div className="text-wrapper-20">Follow Us</div>
                      </div>
                    </div>
                    <div className="nav-list-item-2" />
                    <div className="nav-list-item-3">
                      <p className="text-wrapper-18">Sign Up For Eventfull Updates</p>
                      <div className="group-5">
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-2">
                            <div className="text-wrapper-21">Your email address</div>
                            <div className="overlap-4">
                              <div className="text-wrapper-22">Subscribe</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="will-send-you-weekly">
                        *&nbsp;&nbsp;Will send you weekly updates for promotion events.
                      </p>
                    </div>
                  </div>
                  <div className="group-6">
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
          <div className="group-7">
            <div className="overlap-5">
              <div className="footer-head">
                <div className="rectangle-11" />
              </div>
              <div className="text-wrapper-23">Explore Eventfull</div>
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
