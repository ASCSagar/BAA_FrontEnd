import React from "react";

export default function TopBar() {
  return (
    <>
      <div className="header-topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7 col-7">
              <div className="preheader-left">
                <a href="mailto:info@codeboxr.com">
                  <strong>Email:</strong> info@codeboxr.com
                </a>
                <a href="mailto:info@construc.com">
                  <strong>Hotline:</strong> 880 454 5477
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-sm-5 col-5 text-end">
              <div className="preheader-right">
                <a
                  title="Login"
                  className="btn-auth btn-auth-rev"
                  href="/login">
                  Login
                </a>
                <a title="Register" className="btn-auth btn-auth" href="/login">
                  Signup
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.header-topbar --> */}
    </>
  );
}
