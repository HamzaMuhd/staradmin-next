"use client";
import Script from "next/script";

export default function FormsPage() {
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
                      <a className="nav-link" href="/404">
                        {" "}
                        404{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="/500">
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
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Default form</h4>
                      <p className="card-description"> Basic form layout </p>
                      <form className="forms-sample">
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputUsername1"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputConfirmPassword1">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputConfirmPassword1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-check form-check-flat form-check-primary">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />{" "}
                            Remember me{" "}
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">
                          Submit
                        </button>
                        <button className="btn btn-light">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Horizontal Form</h4>
                      <p className="card-description">
                        {" "}
                        Horizontal form layout{" "}
                      </p>
                      <form className="forms-sample">
                        <div className="form-group row">
                          <label
                            htmlFor="exampleInputUsername2"
                            className="col-sm-3 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputUsername2"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="exampleInputEmail2"
                            className="col-sm-3 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail2"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="exampleInputMobile"
                            className="col-sm-3 col-form-label"
                          >
                            Mobile
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputMobile"
                              placeholder="Mobile number"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="exampleInputPassword2"
                            className="col-sm-3 col-form-label"
                          >
                            Password
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword2"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="exampleInputConfirmPassword2"
                            className="col-sm-3 col-form-label"
                          >
                            Re Password
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputConfirmPassword2"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="form-check form-check-flat form-check-primary">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />{" "}
                            Remember me{" "}
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">
                          Submit
                        </button>
                        <button className="btn btn-light">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Material Form</h4>
                      <p className="card-description"> default layout </p>
                      <form className="forms-sample material-form">
                        <div className="form-group">
                          <input type="text" required="required" />
                          <label htmlFor="input" className="control-label">
                            Username
                          </label>
                          <i className="bar"></i>
                        </div>
                        <div className="form-group">
                          <input type="text" required="required" />
                          <label htmlFor="input" className="control-label">
                            Email address
                          </label>
                          <i className="bar"></i>
                        </div>
                        <div className="form-group">
                          <input type="text" required="required" />
                          <label htmlFor="input" className="control-label">
                            Password
                          </label>
                          <i className="bar"></i>
                        </div>
                        <div className="form-group">
                          <input type="text" required="required" />
                          <label htmlFor="input" className="control-label">
                            Confirm Password
                          </label>
                          <i className="bar"></i>
                        </div>
                        <div className="form-group">
                          <textarea required="required"></textarea>
                          <label htmlFor="textarea" className="control-label">
                            Message
                          </label>
                          <i className="bar"></i>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" defaultChecked />
                            <i className="helper"></i>Remember me{" "}
                          </label>
                        </div>
                        <div className="button-container">
                          <button
                            type="button"
                            className="button btn btn-primary"
                          >
                            <span>Submit</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Material Form</h4>
                      <p className="card-description"> Bordered layout </p>
                      <form className="forms-sample material-form bordered">
                        <div className="form-group">
                          <input type="text" required="required" />
                          <label htmlFor="input" className="control-label">
                            Username
                          </label>
                          <i className="bar"></i>
                        </div>
                        <div className="form-group">
                          <input type="text" required="required" />
                          <label htmlFor="input" className="control-label">
                            Email address
                          </label>
                          <i className="bar"></i>
                        </div>
                        <div className="form-group">
                          <input type="text" required="required" />
                          <label htmlFor="input" className="control-label">
                            Password
                          </label>
                          <i className="bar"></i>
                        </div>
                        <div className="form-group">
                          <input type="text" required="required" />
                          <label htmlFor="input" className="control-label">
                            Confirm Password
                          </label>
                          <i className="bar"></i>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" defaultChecked />
                            <i className="helper"></i>Remember me{" "}
                          </label>
                        </div>
                        <div className="button-container">
                          <button
                            type="button"
                            className="button btn btn-primary"
                          >
                            <span>Submit</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Basic form elements</h4>
                      <p className="card-description"> Basic form elements </p>
                      <form className="forms-sample">
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail3">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail3"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword4">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword4"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleSelectGender">Gender</label>
                          <select
                            className="form-select"
                            id="exampleSelectGender"
                          >
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>File upload</label>
                          <input
                            type="file"
                            name="img[]"
                            className="file-upload-default"
                          />
                          <div className="input-group col-xs-12">
                            <input
                              type="text"
                              className="form-control file-upload-info"
                              disabled
                              placeholder="Upload Image"
                            />
                            <span className="input-group-append">
                              <button
                                className="file-upload-browse btn btn-primary"
                                type="button"
                              >
                                Upload
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputCity1">City</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputCity1"
                            placeholder="Location"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleTextarea1">Textarea</label>
                          <textarea
                            className="form-control"
                            id="exampleTextarea1"
                            rows="4"
                          ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">
                          Submit
                        </button>
                        <button className="btn btn-light">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Input size</h4>
                      <p className="card-description">
                        {" "}
                        Add classNamees like <code>
                          .form-control-lg
                        </code> and <code>.form-control-sm</code>.{" "}
                      </p>
                      <div className="form-group">
                        <label>Large input</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Username"
                          aria-label="Username"
                        />
                      </div>
                      <div className="form-group">
                        <label>Default input</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                        />
                      </div>
                      <div className="form-group">
                        <label>Small input</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Username"
                          aria-label="Username"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Select size</h4>
                      <p className="card-description">
                        {" "}
                        Add classNamees like <code>
                          .form-select-lg
                        </code> and <code>.form-select-sm</code>.{" "}
                      </p>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Large select
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">
                          Default select
                        </label>
                        <select
                          className="form-select"
                          id="exampleFormControlSelect2"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect3">
                          Small select
                        </label>
                        <select
                          className="form-select form-select-sm"
                          id="exampleFormControlSelect3"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Basic input groups</h4>
                      <p className="card-description">
                        {" "}
                        Basic bootstrap input groups{" "}
                      </p>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-primary text-white">
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <div className="input-group-prepend">
                            <span className="input-group-text">0.00</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-primary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                              <div
                                role="separator"
                                className="dropdown-divider"
                              ></div>
                              <a className="dropdown-item" href="#">
                                Separated link
                              </a>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Find in facebook"
                            aria-label="Recipient's username"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-facebook"
                              type="button"
                              style={{ height: "44px" }}
                            >
                              <i className="ti-facebook"></i>
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
                      <h4 className="card-title">Checkbox Controls</h4>
                      <p className="card-description">
                        Checkbox and radio controls (default appearance is in
                        primary color)
                      </p>
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                  />{" "}
                                  Default{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                  />{" "}
                                  Checked{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    disabled
                                  />{" "}
                                  Disabled{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    disabled
                                    defaultChecked
                                  />{" "}
                                  Disabled checked{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="optionsRadios"
                                    id="optionsRadios1"
                                    value=""
                                  />{" "}
                                  Default{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="optionsRadios"
                                    id="optionsRadios2"
                                    value="option2"
                                    defaultChecked
                                  />{" "}
                                  Selected{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="optionsRadios2"
                                    id="optionsRadios3"
                                    value="option3"
                                    disabled
                                  />{" "}
                                  Disabled{" "}
                                </label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="optionsRadio2"
                                    id="optionsRadios4"
                                    value="option4"
                                    disabled
                                    defaultChecked
                                  />{" "}
                                  Selected and disabled{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-body">
                      <p className="card-description">
                        Add className <code>{".form-check-[color]"}</code> for
                        checkbox and radio controls in theme colors
                      </p>

                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="form-check form-check-primary">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                  />{" "}
                                  Primary{" "}
                                </label>
                              </div>
                              <div className="form-check form-check-success">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                  />{" "}
                                  Success{" "}
                                </label>
                              </div>
                              <div className="form-check form-check-info">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                  />{" "}
                                  Info{" "}
                                </label>
                              </div>
                              <div className="form-check form-check-danger">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                  />{" "}
                                  Danger{" "}
                                </label>
                              </div>
                              <div className="form-check form-check-warning">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                  />{" "}
                                  Warning{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="form-check form-check-primary">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="ExampleRadio1"
                                    id="ExampleRadio1"
                                    defaultChecked
                                  />{" "}
                                  Primary{" "}
                                </label>
                              </div>
                              <div className="form-check form-check-success">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="ExampleRadio2"
                                    id="ExampleRadio2"
                                    defaultChecked
                                  />{" "}
                                  Success{" "}
                                </label>
                              </div>
                              <div className="form-check form-check-info">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="ExampleRadio3"
                                    id="ExampleRadio3"
                                    defaultChecked
                                  />{" "}
                                  Info{" "}
                                </label>
                              </div>
                              <div className="form-check form-check-danger">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="ExampleRadio4"
                                    id="ExampleRadio4"
                                    defaultChecked
                                  />{" "}
                                  Danger{" "}
                                </label>
                              </div>
                              <div className="form-check form-check-warning">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    className="form-check-input"
                                    name="ExampleRadio5"
                                    id="ExampleRadio5"
                                    defaultChecked
                                  />{" "}
                                  Warning{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Inline forms</h4>
                      <p className="card-description">
                        {" "}
                        Use the <code>.form-inline</code> className to display a
                        series of labels, form controls, and buttons on a single
                        horizontal row{" "}
                      </p>
                      <form className="form-inline">
                        <label
                          className="sr-only"
                          htmlFor="inlineFormInputName2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control mb-2 mr-sm-2"
                          id="inlineFormInputName2"
                          placeholder="Jane Doe"
                        />
                        <label
                          className="sr-only"
                          htmlFor="inlineFormInputGroupUsername2"
                        >
                          Username
                        </label>
                        <div className="input-group mb-2 mr-sm-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroupUsername2"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-check mx-sm-2">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              defaultChecked
                            />{" "}
                            Remember me{" "}
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Horizontal Two column</h4>
                      <form className="form-sample">
                        <p className="card-description"> Personal info </p>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                First Name
                              </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Last Name
                              </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Gender
                              </label>
                              <div className="col-sm-9">
                                <select className="form-select">
                                  <option>Male</option>
                                  <option>Female</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Date of Birth
                              </label>
                              <div className="col-sm-9">
                                <input
                                  className="form-control"
                                  placeholder="dd/mm/yyyy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Category
                              </label>
                              <div className="col-sm-9">
                                <select className="form-select">
                                  <option>Category1</option>
                                  <option>Category2</option>
                                  <option>Category3</option>
                                  <option>Category4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Membership
                              </label>
                              <div className="col-sm-4">
                                <div className="form-check">
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      className="form-check-input"
                                      name="membershipRadios"
                                      id="membershipRadios1"
                                      value=""
                                      defaultChecked
                                    />{" "}
                                    Free{" "}
                                  </label>
                                </div>
                              </div>
                              <div className="col-sm-5">
                                <div className="form-check">
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      className="form-check-input"
                                      name="membershipRadios"
                                      id="membershipRadios2"
                                      value="option2"
                                    />{" "}
                                    Professional{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="card-description"> Address </p>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Address 1
                              </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                State
                              </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Address 2
                              </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Postcode
                              </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                City
                              </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                Country
                              </label>
                              <div className="col-sm-9">
                                <select className="form-select">
                                  <option>America</option>
                                  <option>Italy</option>
                                  <option>Russia</option>
                                  <option>Britain</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Select 2</h4>
                      <div className="form-group">
                        <label>Single select box using select 2</label>
                        <select className="js-example-basic-single w-100">
                          <option value="AL">Alabama</option>
                          <option value="WY">Wyoming</option>
                          <option value="AM">America</option>
                          <option value="CA">Canada</option>
                          <option value="RU">Russia</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Multiple select using select 2</label>
                        <select
                          className="js-example-basic-multiple w-100"
                          multiple={true}
                        >
                          <option value="AL">Alabama</option>
                          <option value="WY">Wyoming</option>
                          <option value="AM">America</option>
                          <option value="CA">Canada</option>
                          <option value="RU">Russia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Typeahead</h4>
                      <p className="card-description">
                        {" "}
                        A simple suggestion engine{" "}
                      </p>
                      <div className="form-group row">
                        <div className="col">
                          <label>Basic</label>
                          <div id="the-basics">
                            <input
                              className="typeahead"
                              type="text"
                              placeholder="States of USA"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <label>Bloodhound</label>
                          <div id="bloodhound">
                            <input
                              className="typeahead"
                              type="text"
                              placeholder="States of USA"
                            />
                          </div>
                        </div>
                      </div>
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
      {/* Vendor JS */}
      <Script
        src="/vendors/js/vendor.bundle.base.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
        strategy="beforeInteractive"
      />

      {/* Plugin JS for this page */}
      <Script
        src="/vendors/typeahead.js/typeahead.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendors/select2/select2.min.js"
        strategy="beforeInteractive"
      />

      {/* Template & Common JS */}
      <Script src="/js/off-canvas.js" strategy="lazyOnload" />
      <Script src="/js/template.js" strategy="lazyOnload" />
      <Script src="/js/settings.js" strategy="lazyOnload" />
      <Script src="/js/hoverable-collapse.js" strategy="lazyOnload" />
      <Script src="/js/todolist.js" strategy="lazyOnload" />

      {/* Custom JS for this page */}
      <Script src="/js/file-upload.js" strategy="lazyOnload" />
      <Script src="/js/typeahead.js" strategy="lazyOnload" />
      <Script src="/js/select2.js" strategy="lazyOnload" />
    </>
  );
}
