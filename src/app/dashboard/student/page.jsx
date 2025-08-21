import Head from "next/head";
import Script from "next/script";

export default function StudentDashboardPage() {
  return (
    <>
      <main>
        {" "}
        <div className="container-scroller">
          <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
              <div className="me-3">
                <button
                  className="navbar-toggler navbar-toggler align-self-center"
                  type="button"
                  data-bs-toggle="minimize"
                >
                  <span className="icon-menu"></span>
                </button>
              </div>
              <div>
                <a className="navbar-brand brand-logo" href="/">
                  <img src="/images/logo.svg" alt="logo" />
                </a>
                <a className="navbar-brand brand-logo-mini" href="/">
                  <img src="/images/logo-mini.svg" alt="logo" />
                </a>
              </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-top">
              <ul className="navbar-nav">
                <li className="nav-item fw-semibold d-none d-lg-block ms-0">
                  <h1 className="welcome-text">
                    Good Morning,{" "}
                    <span className="text-black fw-bold">John Doe</span>
                  </h1>
                  <h3 className="welcome-sub-text">
                    Your performance summary this week{" "}
                  </h3>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link count-indicator"
                    id="notificationDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="icon-bell"></i>
                    <span className="count"></span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="notificationDropdown"
                  >
                    <a className="dropdown-item py-3 border-bottom">
                      <p className="mb-0 fw-medium float-start">
                        You have 4 new notifications{" "}
                      </p>
                      <span className="badge badge-pill badge-primary float-end">
                        View all
                      </span>
                    </a>
                    <a className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-alert m-auto text-primary"></i>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          Application Error
                        </h6>
                        <p className="fw-light small-text mb-0"> Just now </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-lock-outline m-auto text-primary"></i>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          Settings
                        </h6>
                        <p className="fw-light small-text mb-0">
                          {" "}
                          Private message{" "}
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-airballoon m-auto text-primary"></i>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          New user registration
                        </h6>
                        <p className="fw-light small-text mb-0"> 2 days ago </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                  <a
                    className="nav-link"
                    id="UserDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="img-xs rounded-circle"
                      src="/images/faces/face8.jpg"
                      alt="Profile image"
                    />{" "}
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="UserDropdown"
                  >
                    <div className="dropdown-header text-center">
                      <img
                        className="img-md rounded-circle"
                        src="/images/faces/face8.jpg"
                        alt="Profile image"
                      />
                      <p className="mb-1 mt-3 fw-semibold">Allen Moreno</p>
                      <p className="fw-light text-muted mb-0">
                        allenmoreno@gmail.com
                      </p>
                    </div>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>{" "}
                      My Profile{" "}
                      <span className="badge badge-pill badge-danger">1</span>
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i>{" "}
                      Messages
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i>{" "}
                      Activity
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i>{" "}
                      FAQ
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>
                      Sign Out
                    </a>
                  </div>
                </li>
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-bs-toggle="offcanvas"
              >
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
          </nav>
          <div className="container-fluid page-body-wrapper">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-sm-12"></div>
                </div>
              </div>

              <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                  <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">
                    Copyright © 2025. All rights reserved.
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>

      {/* JS vendors
      <Script
        src="/vendors/js/vendor.bundle.base.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
        strategy="afterInteractive"
      />

      {/* Page specific JS */}
      {/* <Script
        src="/vendors/chart.js/chart.umd.js"
        strategy="afterInteractive"
      />
      <Script
        src="/vendors/progressbar.js/progressbar.min.js"
        strategy="afterInteractive"
      /> */}

      {/* Core Template JS */}
      {/* <Script src="/js/off-canvas.js" strategy="afterInteractive" />
      <Script src="/js/template.js" strategy="afterInteractive" />
      <Script src="/js/settings.js" strategy="afterInteractive" />
      <Script src="/js/hoverable-collapse.js" strategy="afterInteractive" />
      <Script src="/js/todolist.js" strategy="afterInteractive" /> */}

      {/* Custom dashboard JS
      <Script src="/js/jquery.cookie.js" strategy="afterInteractive" />
      <Script src="/js/dashboard.js" strategy="afterInteractive" />  */}
    </>
  );
}
