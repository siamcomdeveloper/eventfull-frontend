import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserSignUp } from "./screens/UserSignUp";
import { UserLogin } from "./screens/UserLogin";

import { VendorSignUp } from "./screens/VendorSignUp";
import { VendorLogin } from "./screens/VendorLogin";

import { MainPage } from "./screens/MainPage";
import { AboutUs } from "./screens/AboutUs";

import { Vendors } from "./screens/Vendors";
import { VendorDetailsPage } from "./screens/VendorDetailsPage/VendorDetailsPage";
import { CustomerBookingPage } from "./screens/CustomerBookingPage";

import { VendorAccount } from "./screens/VendorAccount";
import { VendorCompany } from "./screens/VendorCompany";
import { VendorBooking } from "./screens/VendorBooking";
import { VendorSchedule } from "./screens/VendorSchedule";

import { MyBooking } from "./screens/MyBooking";
import { MyProfile } from "./screens/MyProfile";
import { Subscribe } from "./screens/Subscribe";
import { Plans } from "./screens/Plans";
import { Payment } from "./screens/Payment";

import { AdminUser } from "./screens/AdminUser";
import { AdminVendor } from "./screens/AdminVendor";
import { AdminRevenue } from "./screens/AdminRevenue";

import "./sb-admin-2.css";
import "./index.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendor-details" element={<VendorDetailsPage />} />
          <Route path="/booking-status" element={<CustomerBookingPage />} />

          <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/vendor-account" element={<VendorAccount />} />
          <Route path="/vendor-company" element={<VendorCompany />} />
          <Route path="/vendor-booking" element={<VendorBooking />} />
          <Route path="/vendor-schedule" element={<VendorSchedule />} />

          <Route path="/user-signup" exact element={<UserSignUp />} />
          <Route path="/user-login" exact element={<UserLogin />} />

          <Route path="/vendor-signup" exact element={<VendorSignUp />} />
          <Route path="/vendor-login" exact element={<VendorLogin />} />

          <Route path="/admin-user" exact element={<AdminUser />} />
          <Route path="/admin-vendor" exact element={<AdminVendor />} />
          <Route path="/admin-revenue" exact element={<AdminRevenue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
