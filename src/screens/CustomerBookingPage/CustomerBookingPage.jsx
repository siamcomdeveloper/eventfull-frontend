import React from "react";
import { Menu } from "../../components/Menu";
import { SearchBar } from "../../components/SearchBar";
import "./style.css";

export const CustomerBookingPage = () => {
  return (
    <div className="cusotmer-booking-page">
      <div className="div-2">
        <div className="overlap-3">
          <div className="top-rectangle">
            <img className="white-logo" alt="White logo" src="/img/whitelogo.png" />
          </div>
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
          <Menu
            className="navbar"
            divClassName="menu-instance"
            divClassName1="menu-instance"
            divClassName2="menu-instance"
            divClassNameOverride="menu-instance"
            menuHome="vendors"
          />
          <div className="login-group">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <div className="login">
                  <div className="ellipse" />
                  <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-8.svg" />
                </div>
                <div className="text-wrapper-8">MyAccount</div>
              </div>
            </div>
          </div>
          <SearchBar className="search-bar-instance" text="Hotel" vector="/img/vector-4.svg" />
          <div className="group-2">
            <div className="overlap-4">
              <div className="rectangle-2" />
              <div className="group-3">
                <div className="overlap-5">
                  <div className="overlap-6">
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                    <div className="rectangle-5" />
                    <div className="group-4">
                      <div className="text-wrapper-9">Booking Status</div>
                      <div className="text-wrapper-10">My Profile</div>
                      <div className="billing-subscription">Billing &amp; Subscription</div>
                    </div>
                  </div>
                  <div className="rectangle-6" />
                </div>
                <div className="group-5">
                  <div className="text-wrapper-11">Elope In Banff</div>
                  <img className="group-6" alt="Group" src="/img/group-1000001721.png" />
                </div>
                <div className="text-wrapper-12">Event Types</div>
                <div className="text-wrapper-13">Booking Status</div>
                <div className="text-wrapper-14">Keep Exploring</div>
                <div className="text-wrapper-15">Requested Service</div>
                <div className="group-wrapper">
                  <div className="group-7">
                    <div className="request-sent">Request Sent</div>
                    <div className="text-wrapper-16">Processing</div>
                    <div className="text-wrapper-17">Confirmed!</div>
                    <div className="overlap-group-4">
                      <div className="rectangle-7" />
                      <div className="rectangle-8" />
                      <div className="ellipse-3" />
                      <div className="ellipse-4" />
                      <img className="vector-4" alt="Vector" src="/img/vector-8.svg" />
                      <div className="ellipse-5" />
                    </div>
                  </div>
                </div>
                <div className="group-8">
                  <div className="overlap-7">
                    <div className="overlap-8">
                      <div className="rectangle-9" />
                      <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-19377-1.png" />
                      <div className="text-wrapper-18">Popular Venues</div>
                    </div>
                    <div className="overlap-group-5">
                      <img className="rectangle-11" alt="Rectangle" src="/img/rectangle-19377.png" />
                      <div className="elegant-decorations">
                        Elegant
                        <br />
                        decorations
                      </div>
                    </div>
                    <div className="enjoy-planning-your-wrapper">
                      <div className="enjoy-planning-your">
                        <div className="trending">TRENDING</div>
                        <div className="explore-unique">
                          Explore <br />
                          Unique
                          <br />
                          Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-9">
                  <div className="group-10">
                    <div className="text-wrapper-19">Event design</div>
                    <img className="charm-circle-cross" alt="Charm circle cross" src="/img/charm-circle-cross-2.svg" />
                  </div>
                  <div className="group-11">
                    <div className="text-wrapper-20">Personal Guide</div>
                    <img
                      className="charm-circle-cross-2"
                      alt="Charm circle cross"
                      src="/img/charm-circle-cross-1.svg"
                    />
                  </div>
                  <div className="group-12">
                    <div className="text-wrapper-21">Timelines</div>
                    <img className="charm-circle-cross-3" alt="Charm circle cross" src="/img/charm-circle-cross.svg" />
                  </div>
                </div>
                <div className="group-13">
                  <div className="group-10">
                    <div className="text-wrapper-19">Event design</div>
                    <img className="charm-circle-cross" alt="Charm circle cross" src="/img/charm-circle-cross-2.svg" />
                  </div>
                  <div className="group-11">
                    <div className="text-wrapper-20">Personal Guide</div>
                    <img
                      className="charm-circle-cross-2"
                      alt="Charm circle cross"
                      src="/img/charm-circle-cross-1.svg"
                    />
                  </div>
                  <div className="group-12">
                    <div className="text-wrapper-21">Timelines</div>
                    <img className="charm-circle-cross-3" alt="Charm circle cross" src="/img/charm-circle-cross.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="group-14">
            <div className="group-15">
              <p className="p">Copyright @ Eventfull 2023. All Rights Reserved.</p>
              <div className="rectangle-12" />
              <div className="nav-wrap">
                <div className="nav-list-item">
                  <div className="text-wrapper-22">Company</div>
                  <div className="frame-3">
                    <div className="text-wrapper-23">About Us</div>
                    <div className="text-wrapper-24">Contact Us</div>
                    <div className="text-wrapper-24">Follow Us</div>
                  </div>
                </div>
                <div className="nav-list-item-2">
                  <div className="text-wrapper-22">Parteners</div>
                  <div className="frame-4">
                    <div className="text-wrapper-23">Paradox Hotel Vancouver</div>
                    <div className="text-wrapper-24">Fairmont Empress</div>
                    <div className="text-wrapper-24">Chinook Photography</div>
                    <p className="text-wrapper-24">Connect in the 6 Events</p>
                  </div>
                </div>
                <div className="nav-list-item-3">
                  <p className="text-wrapper-22">Sign Up For Eventfull Updates</p>
                  <div className="group-16">
                    <div className="group-17">
                      <div className="overlap-group-6">
                        <div className="text-wrapper-25">Your email address</div>
                        <div className="overlap-9">
                          <div className="text-wrapper-26">Subscribe</div>
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
              <div className="group-18">
                <div className="discover-book">
                  Discover
                  <br />
                  Book
                  <br />
                  Celebrate Your Moments
                </div>
                <img className="group-19" alt="Group" src="/img/group-169.png" />
              </div>
              <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
            </div>
          </div>
        </footer>
        <div className="overlap-10">
          <div className="footer-head">
            <div className="rectangle-13" />
          </div>
          <div className="text-wrapper-27">Explore Eventfull</div>
        </div>
      </div>
    </div>
  );
};
