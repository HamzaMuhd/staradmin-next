import Script from "next/script";

export default function ButtonsPage() {
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
              <a className="navbar-brand brand-logo" href="../../index.html">
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
                      <a className="nav-link" href="/components/form">
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
                      <a
                        className="nav-link"
                        href="../../pages/charts/chartjs.html"
                      >
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
                      <a
                        className="nav-link"
                        href="../../pages/tables/basic-table.html"
                      >
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
                      <a
                        className="nav-link"
                        href="../../pages/icons/font-awesome.html"
                      >
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
                      <a
                        className="nav-link"
                        href="../../pages/samples/blank-page.html"
                      >
                        {" "}
                        Blank Page{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="../../pages/samples/error-404.html"
                      >
                        {" "}
                        404{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="../../pages/samples/error-500.html"
                      >
                        {" "}
                        500{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="../../pages/samples/login.html"
                      >
                        {" "}
                        Login{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="../../pages/samples/register.html"
                      >
                        {" "}
                        Register{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../../docs/documentation.html">
                  <i className="menu-icon mdi mdi-file-document"></i>
                  <span className="menu-title">Documentation</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-body">
                          <h4 className="card-title">Single color buttons</h4>
                          <p className="card-description">
                            Add class <code>{".btn-{color}"}</code> for buttons
                            in theme colors
                          </p>
                          <div className="template-demo">
                            <button type="button" className="btn btn-primary">
                              Primary
                            </button>
                            <button type="button" className="btn btn-secondary">
                              Secondary
                            </button>
                            <button type="button" className="btn btn-success">
                              Success
                            </button>
                            <button type="button" className="btn btn-danger">
                              Danger
                            </button>
                            <button type="button" className="btn btn-warning">
                              Warning
                            </button>
                            <button type="button" className="btn btn-info">
                              Info
                            </button>
                            <button type="button" className="btn btn-light">
                              Light
                            </button>
                            <button type="button" className="btn btn-dark">
                              Dark
                            </button>
                            <button type="button" className="btn btn-link">
                              Link
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h4 className="card-title">Rounded buttons</h4>
                          <p className="card-description">
                            Add className <code>.btn-rounded</code>
                          </p>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-primary btn-rounded btn-fw"
                            >
                              Primary
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary btn-rounded btn-fw"
                            >
                              Secondary
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded btn-fw"
                            >
                              Success
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded btn-fw"
                            >
                              Danger
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning btn-rounded btn-fw"
                            >
                              Warning
                            </button>
                            <button
                              type="button"
                              className="btn btn-info btn-rounded btn-fw"
                            >
                              Info
                            </button>
                            <button
                              type="button"
                              className="btn btn-light btn-rounded btn-fw"
                            >
                              Light
                            </button>
                            <button
                              type="button"
                              className="btn btn-dark btn-rounded btn-fw"
                            >
                              Dark
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-rounded btn-fw"
                            >
                              Link
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-body">
                          <h4 className="card-title">Outlined buttons</h4>
                          <p className="card-description">
                            Add class <code>{".btn-outline-{color}"}</code> for
                            outline buttons
                          </p>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-fw"
                            >
                              Primary
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-fw"
                            >
                              Secondary
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-success btn-fw"
                            >
                              Success
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-fw"
                            >
                              Danger
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-warning btn-fw"
                            >
                              Warning
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info btn-fw"
                            >
                              Info
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-light btn-fw"
                            >
                              Light
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-dark btn-fw"
                            >
                              Dark
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-fw"
                            >
                              Link
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h4 className="card-title">Inverse buttons</h4>
                          <p className="card-description">
                            Add class{" "}
                            <code>
                              {".btn-inverse-{color}"} for inverse buttons
                            </code>
                          </p>

                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-inverse-primary btn-fw"
                            >
                              Primary
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-secondary btn-fw"
                            >
                              Secondary
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-success btn-fw"
                            >
                              Success
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-danger btn-fw"
                            >
                              Danger
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-warning btn-fw"
                            >
                              Warning
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-info btn-fw"
                            >
                              Info
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-light btn-fw"
                            >
                              Light
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-dark btn-fw"
                            >
                              Dark
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-fw"
                            >
                              Link
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 grid-margin stretch-card">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="card-body">
                          <h4 className="card-title">Icon Buttons</h4>
                          <p className="card-description">
                            Add className <code>.btn-icon</code> for buttons
                            with only icons
                          </p>
                          <div className="template-demo d-flex justify-content-between flex-nowrap">
                            <button
                              type="button"
                              className="btn btn-primary btn-rounded btn-icon"
                            >
                              <i className="ti-home"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-dark btn-rounded btn-icon"
                            >
                              <i className="ti-world"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded btn-icon"
                            >
                              <i className="ti-email"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-info btn-rounded btn-icon"
                            >
                              <i className="ti-star"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded btn-icon"
                            >
                              <i className="ti-location-pin"></i>
                            </button>
                          </div>
                          <div className="template-demo d-flex justify-content-between flex-nowrap">
                            <button
                              type="button"
                              className="btn btn-inverse-primary btn-icon"
                            >
                              <i className="ti-home"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-dark btn-icon"
                            >
                              <i className="ti-world"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-danger btn-icon"
                            >
                              <i className="ti-email"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-info btn-icon"
                            >
                              <i className="ti-star"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-inverse-success btn-icon"
                            >
                              <i className="ti-location-pin"></i>
                            </button>
                          </div>
                          <div className="template-demo d-flex justify-content-between flex-nowrap mt-4">
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-heart text-danger"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-music-alt text-dark"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-star text-primary"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-bar-chart-alt text-info"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-stats-up text-success"></i>
                            </button>
                          </div>
                          <div className="template-demo d-flex justify-content-between flex-nowrap">
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-heart"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-music-alt"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-star"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-bar-chart-alt"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-rounded btn-icon"
                            >
                              <i className="ti-stats-up"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="card-body">
                          <h4 className="card-title">Button Size</h4>
                          <p className="card-description">
                            Use class <code>{".btn-{size}"}</code>
                          </p>

                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-lg"
                            >
                              btn-lg
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-md"
                            >
                              btn-md
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm"
                            >
                              btn-sm
                            </button>
                          </div>
                          <div className="template-demo mt-4">
                            <button
                              type="button"
                              className="btn btn-danger btn-lg"
                            >
                              btn-lg
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-md"
                            >
                              btn-md
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              btn-sm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Block buttons</h4>
                      <p className="card-description">
                        Add className <code>d-grid gap-2</code> to parent div of
                        button element
                      </p>
                      <div className="template-demo d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-info btn-lg btn-block"
                        >
                          Block buttons <i className="ti-menu float-end"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-dark btn-lg btn-block"
                        >
                          Block buttons
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          <i className="ti-user"></i> Block buttons{" "}
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-lg btn-block"
                        >
                          Block buttons
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 grid-margin">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-body">
                          <h4 className="card-title">Button groups</h4>
                          <p className="card-description">
                            Wrap a series of buttons with <code>.btn</code> in{" "}
                            <code>.btn-group</code>
                          </p>
                          <div className="template-demo">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                1
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                2
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                3
                              </button>
                            </div>
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="ti-heart"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="ti-calendar"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="ti-time"></i>
                              </button>
                            </div>
                          </div>
                          <div className="template-demo">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <button type="button" className="btn btn-primary">
                                1
                              </button>
                              <button type="button" className="btn btn-primary">
                                2
                              </button>
                              <button type="button" className="btn btn-primary">
                                3
                              </button>
                            </div>
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <button type="button" className="btn btn-primary">
                                <i className="ti-heart"></i>
                              </button>
                              <button type="button" className="btn btn-primary">
                                <i className="ti-calendar"></i>
                              </button>
                              <button type="button" className="btn btn-primary">
                                <i className="ti-time"></i>
                              </button>
                            </div>
                          </div>
                          <div className="template-demo mt-4">
                            <div
                              className="btn-group-vertical"
                              role="group"
                              aria-label="Basic example"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="ti-upload"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="ti-split-v"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                <i className="ti-download"></i>
                              </button>
                            </div>
                            <div
                              className="btn-group-vertical"
                              role="group"
                              aria-label="Basic example"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                Default
                              </button>
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                >
                                  Dropdown
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item">Go back</a>
                                  <a className="dropdown-item">Delete</a>
                                  <a className="dropdown-item">Swap</a>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                Default
                              </button>
                            </div>
                            <div
                              className="btn-group-vertical"
                              role="group"
                              aria-label="Basic example"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                Top
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                Middle
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                              >
                                Bottom
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h4 className="card-title">
                            Button with text and icon
                          </h4>
                          <p className="card-description">
                            Wrap icon and text inside{" "}
                            <code>.btn-icon-text</code> and use{" "}
                            <code>.btn-icon-prepend</code> or{" "}
                            <code>.btn-icon-append</code> for icon tags{" "}
                          </p>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-primary btn-icon-text"
                            >
                              <i className="ti-file btn-icon-prepend"></i>{" "}
                              Submit{" "}
                            </button>
                            <button
                              type="button"
                              className="btn btn-dark btn-icon-text"
                            >
                              {" "}
                              Edit <i className="ti-file btn-icon-append"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-icon-text"
                            >
                              <i className="ti-alert btn-icon-prepend"></i>{" "}
                              Warning{" "}
                            </button>
                          </div>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-danger btn-icon-text"
                            >
                              <i className="ti-upload btn-icon-prepend"></i>{" "}
                              Upload{" "}
                            </button>
                            <button
                              type="button"
                              className="btn btn-info btn-icon-text"
                            >
                              {" "}
                              Print{" "}
                              <i className="ti-printer btn-icon-append"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning btn-icon-text"
                            >
                              <i className="ti-reload btn-icon-prepend"></i>{" "}
                              Reset{" "}
                            </button>
                          </div>
                          <div className="template-demo mt-2">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-icon-text"
                            >
                              <i className="ti-file btn-icon-prepend"></i>{" "}
                              Submit{" "}
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-icon-text"
                            >
                              {" "}
                              Edit <i className="ti-file btn-icon-append"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-success btn-icon-text"
                            >
                              <i className="ti-alert btn-icon-prepend"></i>{" "}
                              Warning{" "}
                            </button>
                          </div>
                          <div className="template-demo">
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-icon-text"
                            >
                              <i className="ti-upload btn-icon-prepend"></i>{" "}
                              Upload{" "}
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info btn-icon-text"
                            >
                              {" "}
                              Print{" "}
                              <i className="ti-printer btn-icon-append"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-warning btn-icon-text"
                            >
                              <i className="ti-reload btn-icon-prepend"></i>{" "}
                              Reset{" "}
                            </button>
                          </div>
                          <div className="template-demo mt-2">
                            <button className="btn btn-outline-dark btn-icon-text">
                              <i className="ti-apple btn-icon-prepend"></i>
                              <span className="d-inline-block text-left">
                                <small className="fw-light d-block">
                                  Available on the
                                </small>{" "}
                                App Store{" "}
                              </span>
                            </button>
                            <button className="btn btn-outline-dark btn-icon-text">
                              <i className="ti-android btn-icon-prepend"></i>
                              <span className="d-inline-block text-left">
                                <small className="fw-light d-block">
                                  Get it on the
                                </small>{" "}
                                Google Play{" "}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Social Icon Buttons</h4>
                      <p className="card-description">
                        Add className <code>.btn-social-icon</code>
                      </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-social-icon btn-outline-facebook"
                        >
                          <i className="ti-facebook"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-outline-youtube"
                        >
                          <i className="ti-youtube"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-outline-twitter"
                        >
                          <i className="ti-twitter-alt"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-outline-dribbble"
                        >
                          <i className="ti-dribbble"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-outline-linkedin"
                        >
                          <i className="ti-linkedin"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-outline-google"
                        >
                          <i className="ti-google"></i>
                        </button>
                      </div>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-social-icon btn-facebook"
                        >
                          <i className="ti-facebook"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-youtube"
                        >
                          <i className="ti-youtube"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-twitter"
                        >
                          <i className="ti-twitter-alt"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-dribbble"
                        >
                          <i className="ti-dribbble"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-linkedin"
                        >
                          <i className="ti-linkedin"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-google"
                        >
                          <i className="ti-google"></i>
                        </button>
                      </div>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-social-icon btn-facebook btn-rounded"
                        >
                          <i className="ti-facebook"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-youtube btn-rounded"
                        >
                          <i className="ti-youtube"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-twitter btn-rounded"
                        >
                          <i className="ti-twitter-alt"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-dribbble btn-rounded"
                        >
                          <i className="ti-dribbble"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-linkedin btn-rounded"
                        >
                          <i className="ti-linkedin"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon btn-google btn-rounded"
                        >
                          <i className="ti-google"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Social button with text</h4>
                      <p className="card-description">
                        Add className <code>.btn-social-icon-text</code>
                      </p>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-social-icon-text btn-facebook"
                        >
                          <i className="ti-facebook"></i>Facebook
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon-text btn-youtube"
                        >
                          <i className="ti-youtube"></i>Youtube
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon-text btn-twitter"
                        >
                          <i className="ti-twitter-alt"></i>Twitter
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon-text btn-dribbble"
                        >
                          <i className="ti-dribbble"></i>Dribbble
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon-text btn-linkedin"
                        >
                          <i className="ti-linkedin"></i>Linkedin
                        </button>
                        <button
                          type="button"
                          className="btn btn-social-icon-text btn-google"
                        >
                          <i className="ti-google"></i>Google
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">
                  Copyright © 2023. All rights reserved.
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
      {/* Vendor JS */}
      <Script
        src="/vendors/js/vendor.bundle.base.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
        strategy="beforeInteractive"
      />

      {/* Custom JS */}
      <Script src="/js/off-canvas.js" strategy="lazyOnload" />
      <Script src="/js/template.js" strategy="lazyOnload" />
      <Script src="/js/settings.js" strategy="lazyOnload" />
      <Script src="/js/hoverable-collapse.js" strategy="lazyOnload" />
      <Script src="/js/todolist.js" strategy="lazyOnload" />
    </>
  );
}
