import React from "react";
import "./style.css";

export const AdminVendor = () => {
  return (
    <div className="admin-vendor">
      <div className="div">
        <div className="overlap">
          <img className="bg-img" alt="Bg img" src="/img/bgimg.png" />
          <img className="white-logo" alt="White logo" src="/img/whitelogo.png" />
          <div className="group">
            <div className="overlap-group">
              <div className="footer-head">
                <div className="rectangle" />
              </div>
              <div className="text-wrapper">Explore Eventfull</div>
            </div>
          </div>
          <div className="rectangle-2" />
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <a href='/admin-vendor'><div className="rectangle-3" /></a>
              <a href='/admin-user'><div className="rectangle-4" /></a>
              <a href='/admin-revenue'><div className="rectangle-5" /></a>
              <div className="group-2">
                <a href='/admin-vendor'><div className="text-wrapper-2">Vendor</div></a>
                <a href='/admin-user'><div className="text-wrapper-3">User</div></a>
                <a href='/admin-revenue'><div className="text-wrapper-4">Revenue Report</div></a>
              </div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-3">
              <img className="img" alt="Group" src="/img/group-1000001855.png" />
              <img className="group-3" alt="Group" src="/img/group-1000001856.png" />
              <img className="group-4" alt="Group" src="/img/group-1000001857.png" />
              <img className="group-5" alt="Group" src="/img/group-1000001858.png" />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-3">
              <img className="img" alt="Group" src="/img/group-1000001855-1.png" />
              <img className="group-3" alt="Group" src="/img/group-1000001856-1.png" />
              <img className="group-4" alt="Group" src="/img/group-1000001857-1.png" />
              <img className="group-5" alt="Group" src="/img/group-1000001858-1.png" />
            </div>
          </div>
          <div className="group-6">
            <div className="overlap-3">
              <img className="img" alt="Group" src="/img/group-1000001855-2.png" />
              <img className="group-3" alt="Group" src="/img/group-1000001856-2.png" />
              <img className="group-4" alt="Group" src="/img/group-1000001857-2.png" />
              <img className="group-5" alt="Group" src="/img/group-1000001858-2.png" />
            </div>
          </div>
          <div className="group-7">
            <div className="overlap-3">
              <img className="img" alt="Group" src="/img/group-1000001855-3.png" />
              <img className="group-3" alt="Group" src="/img/group-1000001856-3.png" />
              <img className="group-4" alt="Group" src="/img/group-1000001857-3.png" />
              <img className="group-5" alt="Group" src="/img/group-1000001858-3.png" />
            </div>
          </div>
          <p className="showing-from">
            <span className="span">Showing </span>
            <span className="text-wrapper-5">1-10</span>
            <span className="span"> from </span>
            <span className="text-wrapper-5">46</span>
            <span className="span"> data</span>
          </p>
          <div className="pagination">
            <div className="pagination-2">
              <div className="number">
                <div className="overlap-group-2">
                  <div className="overlap-4">
                    <div className="text-wrapper-6">1</div>
                  </div>
                  <div className="text-wrapper-7">2</div>
                  <div className="text-wrapper-8">3</div>
                  <div className="text-wrapper-9">4</div>
                </div>
              </div>
              <div className="btn-prev">
                <img className="ic-chevron" alt="Ic chevron" src="/img/ic-chevron.svg" />
              </div>
              <div className="btn-next">
                <img className="ic-chevron" alt="Ic chevron" src="/img/ic-chevron-1.svg" />
              </div>
            </div>
          </div>
          <div className="text-wrapper-10">Vendors</div>
        </div>
        <footer className="footer">
          <div className="group-wrapper">
            <div className="group-8">
              <p className="p">Copyright @ Eventfull 2023. All Rights Reserved.</p>
              <div className="rectangle-6" />
              <div className="overlap-5">
                <div className="nav-wrap">
                  <div className="nav-list-item">
                    <div className="text-wrapper-11">Company</div>
                    <div className="frame">
                      <div className="text-wrapper-12">About Us</div>
                      <div className="text-wrapper-13">Contact Us</div>
                      <div className="text-wrapper-13">Follow Us</div>
                    </div>
                  </div>
                  <div className="nav-list-item-2" />
                  <div className="nav-list-item-3">
                    <p className="text-wrapper-11">Sign Up For Eventfull Updates</p>
                    <div className="group-9">
                      <div className="group-10">
                        <div className="overlap-group-3">
                          <div className="text-wrapper-14">Your email address</div>
                          <div className="overlap-6">
                            <div className="text-wrapper-15">Subscribe</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="will-send-you-weekly">
                      *&nbsp;&nbsp;Will send you weekly updates for promotion events.
                    </p>
                  </div>
                </div>
                <div className="group-11">
                  <div className="discover-book">
                    Discover
                    <br />
                    Book
                    <br />
                    Celebrate Your Moments
                  </div>
                  <img className="group-12" alt="Group" src="/img/group-169.png" />
                </div>
              </div>
              <img className="original-logo" alt="Original logo" src="/img/originallogo.png" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
