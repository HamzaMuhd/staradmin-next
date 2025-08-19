import Script from "next/script";

export default function ChartPage() {
  return (
    <>
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
              <li className="nav-item dropdown d-none d-lg-block">
                <a
                  className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split"
                  id="messageDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  Select Category{" "}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                  aria-labelledby="messageDropdown"
                >
                  <a className="dropdown-item py-3">
                    <p className="mb-0 fw-medium float-start">
                      Select category
                    </p>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis fw-medium text-dark">
                        Bootstrap Bundle{" "}
                      </p>
                      <p className="fw-light small-text mb-0">
                        This is a Bundle featuring 16 unique dashboards
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis fw-medium text-dark">
                        Angular Bundle
                      </p>
                      <p className="fw-light small-text mb-0">
                        Everything you’ll ever need for your Angular projects
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis fw-medium text-dark">
                        VUE Bundle
                      </p>
                      <p className="fw-light small-text mb-0">
                        Bundle of 6 Premium Vue Admin Dashboard
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis fw-medium text-dark">
                        React Bundle
                      </p>
                      <p className="fw-light small-text mb-0">
                        Bundle of 8 Premium React Admin Dashboard
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item d-none d-lg-block">
                <div
                  id="datepicker-popup"
                  className="input-group date datepicker navbar-date-picker"
                >
                  <span className="input-group-addon input-group-prepend border-right">
                    <span className="icon-calendar input-group-text calendar-icon"></span>
                  </span>
                  <input type="text" className="form-control" />
                </div>
              </li>
              <li className="nav-item">
                <form className="search-form" action="#">
                  <i className="icon-search"></i>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Here"
                    title="Search here"
                  />
                </form>
              </li>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link count-indicator"
                  id="countDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="icon-mail icon-lg"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                  aria-labelledby="countDropdown"
                >
                  <a className="dropdown-item py-3">
                    <p className="mb-0 fw-medium float-start">
                      You have 7 unread mails{" "}
                    </p>
                    <span className="badge badge-pill badge-primary float-end">
                      View all
                    </span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="/images/faces/face10.jpg"
                        alt="image"
                        className="img-sm profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis fw-medium text-dark">
                        Marian Garner{" "}
                      </p>
                      <p className="fw-light small-text mb-0">
                        {" "}
                        The meeting is cancelled{" "}
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="/images/faces/face12.jpg"
                        alt="image"
                        className="img-sm profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis fw-medium text-dark">
                        David Grey{" "}
                      </p>
                      <p className="fw-light small-text mb-0">
                        {" "}
                        The meeting is cancelled{" "}
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="/images/faces/face1.jpg"
                        alt="image"
                        className="img-sm profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis fw-medium text-dark">
                        Travis Jenkins{" "}
                      </p>
                      <p className="fw-light small-text mb-0">
                        {" "}
                        The meeting is cancelled{" "}
                      </p>
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
              <li className="nav-item nav-category">UI Elements</li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#ui-basic"
                  aria-expanded="false"
                  aria-controls="ui-basic"
                >
                  <i className="menu-icon mdi mdi-floor-plan"></i>
                  <span className="menu-title">UI Elements</span>
                  <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="ui-basic">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/components/ui">
                        Buttons
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/components/dropdown">
                        Dropdowns
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/components/typhography">
                        Typography
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#form-elements"
                  aria-expanded="false"
                  aria-controls="form-elements"
                >
                  <i className="menu-icon mdi mdi-card-text-outline"></i>
                  <span className="menu-title">Form elements</span>
                  <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="form-elements">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="./components/form">
                        Basic Elements
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#charts"
                  aria-expanded="false"
                  aria-controls="charts"
                >
                  <i className="menu-icon mdi mdi-chart-line"></i>
                  <span className="menu-title">Charts</span>
                  <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="charts">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="./components/chart">
                        ChartJs
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#tables"
                  aria-expanded="false"
                  aria-controls="tables"
                >
                  <i className="menu-icon mdi mdi-table"></i>
                  <span className="menu-title">Tables</span>
                  <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="tables">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/components/table">
                        Basic table
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#icons"
                  aria-expanded="false"
                  aria-controls="icons"
                >
                  <i className="menu-icon mdi mdi-layers-outline"></i>
                  <span className="menu-title">Icons</span>
                  <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="icons">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/components/fonts">
                        Font Awesome
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#auth"
                  aria-expanded="false"
                  aria-controls="auth"
                >
                  <i className="menu-icon mdi mdi-account-circle-outline"></i>
                  <span className="menu-title">User Pages</span>
                  <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="auth">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/blankpage">
                        {" "}
                        Blank Page{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/error404">
                        {" "}
                        404{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/error500">
                        {" "}
                        500{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/login">
                        {" "}
                        Login{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/signup">
                        {" "}
                        Register{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="menu-icon mdi mdi-file-document"></i>
                  <span className="menu-title">Documentation</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-lg-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Line chart</h4>
                      <canvas id="lineChart"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Bar chart</h4>
                      <canvas id="barChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Area chart</h4>
                      <canvas id="areaChart"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Doughnut chart</h4>
                      <div className="doughnutjs-wrapper d-flex justify-content-center">
                        <canvas
                          id="doughnutChart"
                          style={{ height: "250px" }}
                        ></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Pie chart</h4>
                      <div className="doughnutjs-wrapper d-flex justify-content-center">
                        <canvas
                          id="pieChart"
                          style={{ height: "250px" }}
                        ></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Scatter chart</h4>
                      <canvas id="scatterChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="footer">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                  Premium{" "}
                  <a href="https://www.bootstrapdash.com/" target="_blank">
                    Bootstrap admin template
                  </a>{" "}
                  from BootstrapDash.
                </span>
                <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">
                  Copyright © 2023. All rights reserved.
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Vendor scripts */}
      <Script
        src="/vendors/js/vendor.bundle.base.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
        strategy="beforeInteractive"
      />

      {/* Plugin js for this page */}
      <Script
        src="/vendors/chart.js/chart.umd.js"
        strategy="afterInteractive"
      />

      {/* Core template scripts */}
      <Script src="/js/off-canvas.js" strategy="afterInteractive" />
      <Script src="/js/template.js" strategy="afterInteractive" />
      <Script src="/js/settings.js" strategy="afterInteractive" />
      <Script src="/js/hoverable-collapse.js" strategy="afterInteractive" />
      <Script src="/js/todolist.js" strategy="afterInteractive" />

      {/* Custom chart scripts */}
      <Script src="/js/chart.js" strategy="afterInteractive" />
    </>
  );
}
