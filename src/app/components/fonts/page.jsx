import Script from "next/script";

export default function FontsPage() {
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
                      <a className="nav-link" href="/components/chart">
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
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">New Icons</h4>
                      <div className="icons-list row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-address-book"></i>fa
                          fa-address-book{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-address-book-o"></i>fa
                          fa-address-book-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-address-card"></i>fa
                          fa-address-card{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-address-card-o"></i>fa
                          fa-address-card-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-bandcamp"></i>fa fa-bandcamp{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-bath"></i>fa fa-bath{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-bathtub"></i>fa fa-bathtub{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-drivers-license"></i>fa
                          fa-drivers-license{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-drivers-license-o"></i>fa
                          fa-drivers-license-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-eercast"></i>fa fa-eercast{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-envelope-open"></i>fa
                          fa-envelope-open{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-envelope-open-o"></i>fa
                          fa-envelope-open-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-etsy"></i>fa fa-etsy{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-free-code-camp"></i>fa
                          fa-free-code-camp{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-grav"></i>fa fa-grav{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-handshake-o"></i>fa fa-handshake-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-id-badge"></i>fa fa-id-badge{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-id-card"></i>fa fa-id-card{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-id-card-o"></i>fa fa-id-card-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-imdb"></i>fa fa-imdb{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-linode"></i> fa fa-linode{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-meetup"></i>fa fa-meetup{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-microchip"></i>fa fa-microchip{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-podcast"></i>fa fa-podcast{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-quora"></i>fa fa-quora{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-ravelry"></i>fa fa-ravelry{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-s15"></i>fa fa-s15{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-shower"></i>fa fa-shower{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-snowflake-o"></i>fa fa-snowflake-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-superpowers"></i>fa fa-superpowers{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-telegram"></i>fa fa-telegram{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer"></i>fa fa-thermometer{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-0"></i>fa
                          fa-thermometer-0{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-1"></i>fa
                          fa-thermometer-1{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-2"></i>fa
                          fa-thermometer-2{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-3"></i>fa
                          fa-thermometer-3{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-4"></i>fa
                          fa-thermometer-4{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-empty"></i>fa
                          fa-thermometer-empty{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-full"></i>fa
                          fa-thermometer-full{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-half"></i>fa
                          fa-thermometer-half{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-quarter"></i>fa
                          fa-thermometer-quarter{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-thermometer-three-quarters"></i>fa
                          fa-thermometer-three-quarters{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-times-rectangle"></i>fa
                          fa-times-rectangle{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-times-rectangle-o"></i>fa
                          fa-times-rectangle-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-user-circle"></i>fa fa-user-circle{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-user-circle-o"></i>fa
                          fa-user-circle-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-user-o"></i>fa fa-user-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-vcard"></i>fa fa-vcard{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-vcard-o"></i>fa fa-vcard-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-window-close"></i>fa
                          fa-window-close{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-window-close-o"></i>fa
                          fa-window-close-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-window-maximize"></i>fa
                          fa-window-maximize{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-window-minimize"></i>fa
                          fa-window-minimize{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-window-restore"></i>fa
                          fa-window-restore{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          {" "}
                          <i className="fa fa-wpexplorer"></i>fa fa-wpexplorer{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Web Application Icons</h4>
                      <div className="icons-list row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-adjust"></i> fa-adjust
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-anchor"></i> fa-anchor
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-archive"></i> fa-archive
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows"></i> fa-arrows
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows-h"></i> fa-arrows-h
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows-v"></i> fa-arrows-v
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-asterisk"></i> fa-asterisk
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-automobile"></i> fa-automobile{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ban"></i> fa-ban
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bank"></i> fa-bank{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bar-chart-o"></i> fa-bar-chart-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-barcode"></i> fa-barcode
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bars"></i> fa-bars
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-beer"></i> fa-beer
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bell"></i> fa-bell
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bell-o"></i> fa-bell-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bolt"></i> fa-bolt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bomb"></i> fa-bomb
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-book"></i> fa-book
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bookmark"></i> fa-bookmark
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bookmark-o"></i> fa-bookmark-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-briefcase"></i> fa-briefcase
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bug"></i> fa-bug
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-building"></i> fa-building
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-building-o"></i> fa-building-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bullhorn"></i> fa-bullhorn
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bullseye"></i> fa-bullseye
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cab"></i> fa-cab{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-calendar"></i> fa-calendar
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-calendar-o"></i> fa-calendar-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-camera"></i> fa-camera
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-camera-retro"></i> fa-camera-retro
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-car"></i> fa-car
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-down"></i>{" "}
                          fa-caret-square-o-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-left"></i>{" "}
                          fa-caret-square-o-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-right"></i>{" "}
                          fa-caret-square-o-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-up"></i>{" "}
                          fa-caret-square-o-up{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-certificate"></i> fa-certificate
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check"></i> fa-check
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-circle"></i> fa-check-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-circle-o"></i>{" "}
                          fa-check-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-square"></i> fa-check-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-square-o"></i>{" "}
                          fa-check-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-child"></i> fa-child
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle"></i> fa-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle-o"></i> fa-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle-o-notch"></i>{" "}
                          fa-circle-o-notch
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle-thin"></i> fa-circle-thin
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-clock-o"></i> fa-clock-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cloud"></i> fa-cloud
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cloud-download"></i>{" "}
                          fa-cloud-download
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cloud-upload"></i> fa-cloud-upload
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-code"></i> fa-code
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-code-fork"></i> fa-code-fork
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-coffee"></i> fa-coffee
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cog"></i> fa-cog
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cogs"></i> fa-cogs
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-comment"></i> fa-comment
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-comment-o"></i> fa-comment-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-comments"></i> fa-comments
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-comments-o"></i> fa-comments-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-compass"></i> fa-compass
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-credit-card"></i> fa-credit-card
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-crop"></i> fa-crop
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-crosshairs"></i> fa-crosshairs
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cube"></i> fa-cube
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cubes"></i> fa-cubes
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cutlery"></i> fa-cutlery
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-dashboard"></i> fa-dashboard{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-database"></i> fa-database
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-desktop"></i> fa-desktop
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-dot-circle-o"></i> fa-dot-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-download"></i> fa-download
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-edit"></i> fa-edit{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ellipsis-h"></i> fa-ellipsis-h
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ellipsis-v"></i> fa-ellipsis-v
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-envelope"></i> fa-envelope
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-envelope-o"></i> fa-envelope-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-envelope-square"></i>{" "}
                          fa-envelope-square{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-eraser"></i> fa-eraser
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-exchange"></i> fa-exchange
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-exclamation"></i> fa-exclamation
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-exclamation-circle"></i>{" "}
                          fa-exclamation-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-exclamation-triangle"></i>{" "}
                          fa-exclamation-triangle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-external-link"></i>{" "}
                          fa-external-link
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-external-link-square"></i>{" "}
                          fa-external-link-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-eye"></i> fa-eye
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-eye-slash"></i> fa-eye-slash
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fax"></i> fa-fax
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-female"></i> fa-female
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fighter-jet"></i> fa-fighter-jet
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-archive-o"></i>{" "}
                          fa-file-archive-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-audio-o"></i> fa-file-audio-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-code-o"></i> fa-file-code-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-excel-o"></i> fa-file-excel-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-image-o"></i> fa-file-image-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-movie-o"></i> fa-file-movie-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-pdf-o"></i> fa-file-pdf-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-photo-o"></i> fa-file-photo-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-picture-o"></i>{" "}
                          fa-file-picture-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-powerpoint-o"></i>{" "}
                          fa-file-powerpoint-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-sound-o"></i> fa-file-sound-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-video-o"></i> fa-file-video-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-word-o"></i> fa-file-word-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-zip-o"></i> fa-file-zip-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-film"></i> fa-film
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-filter"></i> fa-filter
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fire"></i> fa-fire
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fire-extinguisher"></i>{" "}
                          fa-fire-extinguisher{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flag"></i> fa-flag
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flag-checkered"></i>{" "}
                          fa-flag-checkered
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flag-o"></i> fa-flag-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flash"></i> fa-flash{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flask"></i> fa-flask
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-folder"></i> fa-folder
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-folder-o"></i> fa-folder-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-folder-open"></i> fa-folder-open
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-folder-open-o"></i>{" "}
                          fa-folder-open-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-frown-o"></i> fa-frown-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gamepad"></i> fa-gamepad
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gavel"></i> fa-gavel
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gear"></i> fa-gear{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gears"></i> fa-gears{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gift"></i> fa-gift
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-glass"></i> fa-glass
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-globe"></i> fa-globe
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-graduation-cap"></i>{" "}
                          fa-graduation-cap
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-group"></i> fa-group{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-hdd-o"></i> fa-hdd-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-headphones"></i> fa-headphones
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-heart"></i> fa-heart
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-heart-o"></i> fa-heart-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-history"></i> fa-history
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-home"></i> fa-home
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-image"></i> fa-image{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-inbox"></i> fa-inbox
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-info"></i> fa-info
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-info-circle"></i> fa-info-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-institution"></i> fa-institution{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-key"></i> fa-key
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-keyboard-o"></i> fa-keyboard-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-language"></i> fa-language
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-laptop"></i> fa-laptop
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-leaf"></i> fa-leaf
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-legal"></i> fa-legal{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-lemon-o"></i> fa-lemon-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-level-down"></i> fa-level-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-level-up"></i> fa-level-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-life-bouy"></i> fa-life-bouy{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-life-ring"></i> fa-life-ring
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-life-saver"></i> fa-life-saver{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-lightbulb-o"></i> fa-lightbulb-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-location-arrow"></i>{" "}
                          fa-location-arrow
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-lock"></i> fa-lock
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-magic"></i> fa-magic
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-magnet"></i> fa-magnet
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mail-forward"></i> fa-mail-forward{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mail-reply"></i> fa-mail-reply{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mail-reply-all"></i>{" "}
                          fa-mail-reply-all{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-male"></i> fa-male
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-map-marker"></i> fa-map-marker
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-meh-o"></i> fa-meh-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-microphone"></i> fa-microphone
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-microphone-slash"></i>{" "}
                          fa-microphone-slash{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus"></i> fa-minus
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus-circle"></i> fa-minus-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus-square"></i> fa-minus-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus-square-o"></i>{" "}
                          fa-minus-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mobile"></i> fa-mobile
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mobile-phone"></i> fa-mobile-phone{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-money"></i> fa-money
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-moon-o"></i> fa-moon-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mortar-board"></i> fa-mortar-board{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-music"></i> fa-music
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-navicon"></i> fa-navicon{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-paper-plane"></i> fa-paper-plane
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-paper-plane-o"></i>{" "}
                          fa-paper-plane-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-paw"></i> fa-paw
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pencil"></i> fa-pencil
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pencil-square"></i>{" "}
                          fa-pencil-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pencil-square-o"></i>{" "}
                          fa-pencil-square-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-phone"></i> fa-phone
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-phone-square"></i> fa-phone-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-photo"></i> fa-photo{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-picture-o"></i> fa-picture-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plane"></i> fa-plane
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus"></i> fa-plus
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus-circle"></i> fa-plus-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus-square"></i> fa-plus-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus-square-o"></i>{" "}
                          fa-plus-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-power-off"></i> fa-power-off
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-print"></i> fa-print
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-puzzle-piece"></i> fa-puzzle-piece
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-qrcode"></i> fa-qrcode
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-question"></i> fa-question
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-question-circle"></i>{" "}
                          fa-question-circle{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-quote-left"></i> fa-quote-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-quote-right"></i> fa-quote-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-random"></i> fa-random
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-recycle"></i> fa-recycle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-refresh"></i> fa-refresh
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-reorder"></i> fa-reorder{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-reply"></i> fa-reply
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-reply-all"></i> fa-reply-all
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-retweet"></i> fa-retweet
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-road"></i> fa-road
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rocket"></i> fa-rocket
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rss"></i> fa-rss
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rss-square"></i> fa-rss-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-search"></i> fa-search
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-search-minus"></i> fa-search-minus
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-search-plus"></i> fa-search-plus
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-send"></i> fa-send{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-send-o"></i> fa-send-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share"></i> fa-share
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-alt"></i> fa-share-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-alt-square"></i>{" "}
                          fa-share-alt-square{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-square"></i> fa-share-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-square-o"></i>{" "}
                          fa-share-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-shield"></i> fa-shield
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-shopping-cart"></i>{" "}
                          fa-shopping-cart
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sign-in"></i> fa-sign-in
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sign-out"></i> fa-sign-out
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-signal"></i> fa-signal
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sitemap"></i> fa-sitemap
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sliders"></i> fa-sliders
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-smile-o"></i> fa-smile-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort"></i> fa-sort
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-alpha-asc"></i>{" "}
                          fa-sort-alpha-asc
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-alpha-desc"></i>{" "}
                          fa-sort-alpha-desc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-amount-asc"></i>{" "}
                          fa-sort-amount-asc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-amount-desc"></i>{" "}
                          fa-sort-amount-desc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-asc"></i> fa-sort-asc
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-desc"></i> fa-sort-desc
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-down"></i> fa-sort-down{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-numeric-asc"></i>{" "}
                          fa-sort-numeric-asc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-numeric-desc"></i>{" "}
                          fa-sort-numeric-desc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-up"></i> fa-sort-up{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-space-shuttle"></i>{" "}
                          fa-space-shuttle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spinner"></i> fa-spinner
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spoon"></i> fa-spoon
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-square"></i> fa-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-square-o"></i> fa-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star"></i> fa-star
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-half"></i> fa-star-half
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-half-empty"></i>{" "}
                          fa-star-half-empty{" "}
                          <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-half-full"></i>{" "}
                          fa-star-half-full{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-half-o"></i> fa-star-half-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-o"></i> fa-star-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-suitcase"></i> fa-suitcase
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sun-o"></i> fa-sun-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-support"></i> fa-support{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tablet"></i> fa-tablet
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tachometer"></i> fa-tachometer
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tag"></i> fa-tag
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tags"></i> fa-tags
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tasks"></i> fa-tasks
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-taxi"></i> fa-taxi
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-terminal"></i> fa-terminal
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumb-tack"></i> fa-thumb-tack
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumbs-down"></i> fa-thumbs-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumbs-o-down"></i>{" "}
                          fa-thumbs-o-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumbs-o-up"></i> fa-thumbs-o-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumbs-up"></i> fa-thumbs-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ticket"></i> fa-ticket
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-times"></i> fa-times
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-times-circle"></i> fa-times-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-times-circle-o"></i>{" "}
                          fa-times-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tint"></i> fa-tint
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-down"></i> fa-toggle-down{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-left"></i> fa-toggle-left{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-right"></i> fa-toggle-right{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-up"></i> fa-toggle-up{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-trash-o"></i> fa-trash-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tree"></i> fa-tree
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-trophy"></i> fa-trophy
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-truck"></i> fa-truck
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-umbrella"></i> fa-umbrella
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-university"></i> fa-university
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-unlock"></i> fa-unlock
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-unlock-alt"></i> fa-unlock-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-unsorted"></i> fa-unsorted{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-upload"></i> fa-upload
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-user"></i> fa-user
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-users"></i> fa-users
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-video-camera"></i> fa-video-camera
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-volume-down"></i> fa-volume-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-volume-off"></i> fa-volume-off
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-volume-up"></i> fa-volume-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-warning"></i> fa-warning{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-wheelchair"></i> fa-wheelchair
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-wrench"></i> fa-wrench
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">File Type Icons</h4>
                      <div className="icons-list row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-adjust"></i> fa-adjust
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-anchor"></i> fa-anchor
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-archive"></i> fa-archive
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows"></i> fa-arrows
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows-h"></i> fa-arrows-h
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows-v"></i> fa-arrows-v
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-asterisk"></i> fa-asterisk
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-automobile"></i> fa-automobile{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ban"></i> fa-ban
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bank"></i> fa-bank{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bar-chart-o"></i> fa-bar-chart-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-barcode"></i> fa-barcode
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bars"></i> fa-bars
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-beer"></i> fa-beer
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bell"></i> fa-bell
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bell-o"></i> fa-bell-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bolt"></i> fa-bolt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bomb"></i> fa-bomb
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-book"></i> fa-book
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bookmark"></i> fa-bookmark
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bookmark-o"></i> fa-bookmark-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-briefcase"></i> fa-briefcase
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bug"></i> fa-bug
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-building"></i> fa-building
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-building-o"></i> fa-building-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bullhorn"></i> fa-bullhorn
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bullseye"></i> fa-bullseye
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cab"></i> fa-cab{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-calendar"></i> fa-calendar
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-calendar-o"></i> fa-calendar-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-camera"></i> fa-camera
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-camera-retro"></i> fa-camera-retro
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-car"></i> fa-car
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-down"></i>{" "}
                          fa-caret-square-o-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-left"></i>{" "}
                          fa-caret-square-o-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-right"></i>{" "}
                          fa-caret-square-o-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-up"></i>{" "}
                          fa-caret-square-o-up{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-certificate"></i> fa-certificate
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check"></i> fa-check
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-circle"></i> fa-check-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-circle-o"></i>{" "}
                          fa-check-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-square"></i> fa-check-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-square-o"></i>{" "}
                          fa-check-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-child"></i> fa-child
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle"></i> fa-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle-o"></i> fa-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle-o-notch"></i>{" "}
                          fa-circle-o-notch
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle-thin"></i> fa-circle-thin
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-clock-o"></i> fa-clock-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cloud"></i> fa-cloud
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cloud-download"></i>{" "}
                          fa-cloud-download
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cloud-upload"></i> fa-cloud-upload
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-code"></i> fa-code
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-code-fork"></i> fa-code-fork
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-coffee"></i> fa-coffee
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cog"></i> fa-cog
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cogs"></i> fa-cogs
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-comment"></i> fa-comment
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-comment-o"></i> fa-comment-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-comments"></i> fa-comments
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-comments-o"></i> fa-comments-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-compass"></i> fa-compass
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-credit-card"></i> fa-credit-card
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-crop"></i> fa-crop
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-crosshairs"></i> fa-crosshairs
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cube"></i> fa-cube
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cubes"></i> fa-cubes
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cutlery"></i> fa-cutlery
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-dashboard"></i> fa-dashboard{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-database"></i> fa-database
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-desktop"></i> fa-desktop
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-dot-circle-o"></i> fa-dot-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-download"></i> fa-download
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-edit"></i> fa-edit{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ellipsis-h"></i> fa-ellipsis-h
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ellipsis-v"></i> fa-ellipsis-v
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-envelope"></i> fa-envelope
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-envelope-o"></i> fa-envelope-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-envelope-square"></i>{" "}
                          fa-envelope-square{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-eraser"></i> fa-eraser
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-exchange"></i> fa-exchange
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-exclamation"></i> fa-exclamation
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-exclamation-circle"></i>{" "}
                          fa-exclamation-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-exclamation-triangle"></i>{" "}
                          fa-exclamation-triangle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-external-link"></i>{" "}
                          fa-external-link
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-external-link-square"></i>{" "}
                          fa-external-link-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-eye"></i> fa-eye
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-eye-slash"></i> fa-eye-slash
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fax"></i> fa-fax
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-female"></i> fa-female
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fighter-jet"></i> fa-fighter-jet
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-archive-o"></i>{" "}
                          fa-file-archive-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-audio-o"></i> fa-file-audio-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-code-o"></i> fa-file-code-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-excel-o"></i> fa-file-excel-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-image-o"></i> fa-file-image-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-movie-o"></i> fa-file-movie-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-pdf-o"></i> fa-file-pdf-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-photo-o"></i> fa-file-photo-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-picture-o"></i>{" "}
                          fa-file-picture-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-powerpoint-o"></i>{" "}
                          fa-file-powerpoint-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-sound-o"></i> fa-file-sound-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-video-o"></i> fa-file-video-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-word-o"></i> fa-file-word-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-zip-o"></i> fa-file-zip-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-film"></i> fa-film
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-filter"></i> fa-filter
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fire"></i> fa-fire
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fire-extinguisher"></i>{" "}
                          fa-fire-extinguisher{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flag"></i> fa-flag
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flag-checkered"></i>{" "}
                          fa-flag-checkered
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flag-o"></i> fa-flag-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flash"></i> fa-flash{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flask"></i> fa-flask
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-folder"></i> fa-folder
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-folder-o"></i> fa-folder-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-folder-open"></i> fa-folder-open
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-folder-open-o"></i>{" "}
                          fa-folder-open-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-frown-o"></i> fa-frown-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gamepad"></i> fa-gamepad
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gavel"></i> fa-gavel
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gear"></i> fa-gear{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gears"></i> fa-gears{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gift"></i> fa-gift
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-glass"></i> fa-glass
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-globe"></i> fa-globe
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-graduation-cap"></i>{" "}
                          fa-graduation-cap
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-group"></i> fa-group{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-hdd-o"></i> fa-hdd-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-headphones"></i> fa-headphones
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-heart"></i> fa-heart
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-heart-o"></i> fa-heart-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-history"></i> fa-history
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-home"></i> fa-home
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-image"></i> fa-image{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-inbox"></i> fa-inbox
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-info"></i> fa-info
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-info-circle"></i> fa-info-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-institution"></i> fa-institution{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-key"></i> fa-key
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-keyboard-o"></i> fa-keyboard-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-language"></i> fa-language
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-laptop"></i> fa-laptop
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-leaf"></i> fa-leaf
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-legal"></i> fa-legal{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-lemon-o"></i> fa-lemon-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-level-down"></i> fa-level-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-level-up"></i> fa-level-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-life-bouy"></i> fa-life-bouy{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-life-ring"></i> fa-life-ring
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-life-saver"></i> fa-life-saver{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-lightbulb-o"></i> fa-lightbulb-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-location-arrow"></i>{" "}
                          fa-location-arrow
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-lock"></i> fa-lock
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-magic"></i> fa-magic
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-magnet"></i> fa-magnet
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mail-forward"></i> fa-mail-forward{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mail-reply"></i> fa-mail-reply{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mail-reply-all"></i>{" "}
                          fa-mail-reply-all{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-male"></i> fa-male
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-map-marker"></i> fa-map-marker
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-meh-o"></i> fa-meh-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-microphone"></i> fa-microphone
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-microphone-slash"></i>{" "}
                          fa-microphone-slash{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus"></i> fa-minus
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus-circle"></i> fa-minus-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus-square"></i> fa-minus-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus-square-o"></i>{" "}
                          fa-minus-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mobile"></i> fa-mobile
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mobile-phone"></i> fa-mobile-phone{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-money"></i> fa-money
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-moon-o"></i> fa-moon-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-mortar-board"></i> fa-mortar-board{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-music"></i> fa-music
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-navicon"></i> fa-navicon{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-paper-plane"></i> fa-paper-plane
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-paper-plane-o"></i>{" "}
                          fa-paper-plane-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-paw"></i> fa-paw
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pencil"></i> fa-pencil
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pencil-square"></i>{" "}
                          fa-pencil-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pencil-square-o"></i>{" "}
                          fa-pencil-square-o{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-phone"></i> fa-phone
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-phone-square"></i> fa-phone-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-photo"></i> fa-photo{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-picture-o"></i> fa-picture-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plane"></i> fa-plane
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus"></i> fa-plus
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus-circle"></i> fa-plus-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus-square"></i> fa-plus-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus-square-o"></i>{" "}
                          fa-plus-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-power-off"></i> fa-power-off
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-print"></i> fa-print
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-puzzle-piece"></i> fa-puzzle-piece
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-qrcode"></i> fa-qrcode
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-question"></i> fa-question
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-question-circle"></i>{" "}
                          fa-question-circle{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-quote-left"></i> fa-quote-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-quote-right"></i> fa-quote-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-random"></i> fa-random
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-recycle"></i> fa-recycle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-refresh"></i> fa-refresh
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-reorder"></i> fa-reorder{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-reply"></i> fa-reply
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-reply-all"></i> fa-reply-all
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-retweet"></i> fa-retweet
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-road"></i> fa-road
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rocket"></i> fa-rocket
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rss"></i> fa-rss
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rss-square"></i> fa-rss-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-search"></i> fa-search
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-search-minus"></i> fa-search-minus
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-search-plus"></i> fa-search-plus
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-send"></i> fa-send{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-send-o"></i> fa-send-o{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share"></i> fa-share
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-alt"></i> fa-share-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-alt-square"></i>{" "}
                          fa-share-alt-square{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-square"></i> fa-share-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-square-o"></i>{" "}
                          fa-share-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-shield"></i> fa-shield
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-shopping-cart"></i>{" "}
                          fa-shopping-cart
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sign-in"></i> fa-sign-in
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sign-out"></i> fa-sign-out
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-signal"></i> fa-signal
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sitemap"></i> fa-sitemap
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sliders"></i> fa-sliders
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-smile-o"></i> fa-smile-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort"></i> fa-sort
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-alpha-asc"></i>{" "}
                          fa-sort-alpha-asc
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-alpha-desc"></i>{" "}
                          fa-sort-alpha-desc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-amount-asc"></i>{" "}
                          fa-sort-amount-asc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-amount-desc"></i>{" "}
                          fa-sort-amount-desc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-asc"></i> fa-sort-asc
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-desc"></i> fa-sort-desc
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-down"></i> fa-sort-down{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-numeric-asc"></i>{" "}
                          fa-sort-numeric-asc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-numeric-desc"></i>{" "}
                          fa-sort-numeric-desc{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sort-up"></i> fa-sort-up{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-space-shuttle"></i>{" "}
                          fa-space-shuttle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spinner"></i> fa-spinner
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spoon"></i> fa-spoon
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-square"></i> fa-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-square-o"></i> fa-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star"></i> fa-star
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-half"></i> fa-star-half
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-half-empty"></i>{" "}
                          fa-star-half-empty{" "}
                          <span className="text-muted">(alias)</span>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-half-full"></i>{" "}
                          fa-star-half-full{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-half-o"></i> fa-star-half-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-star-o"></i> fa-star-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-suitcase"></i> fa-suitcase
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-sun-o"></i> fa-sun-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-support"></i> fa-support{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tablet"></i> fa-tablet
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tachometer"></i> fa-tachometer
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tag"></i> fa-tag
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tags"></i> fa-tags
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tasks"></i> fa-tasks
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-taxi"></i> fa-taxi
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-terminal"></i> fa-terminal
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumb-tack"></i> fa-thumb-tack
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumbs-down"></i> fa-thumbs-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumbs-o-down"></i>{" "}
                          fa-thumbs-o-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumbs-o-up"></i> fa-thumbs-o-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-thumbs-up"></i> fa-thumbs-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ticket"></i> fa-ticket
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-times"></i> fa-times
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-times-circle"></i> fa-times-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-times-circle-o"></i>{" "}
                          fa-times-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tint"></i> fa-tint
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-down"></i> fa-toggle-down{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-left"></i> fa-toggle-left{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-right"></i> fa-toggle-right{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-up"></i> fa-toggle-up{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-trash-o"></i> fa-trash-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tree"></i> fa-tree
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-trophy"></i> fa-trophy
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-truck"></i> fa-truck
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-umbrella"></i> fa-umbrella
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-university"></i> fa-university
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-unlock"></i> fa-unlock
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-unlock-alt"></i> fa-unlock-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-unsorted"></i> fa-unsorted{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-upload"></i> fa-upload
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-user"></i> fa-user
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-users"></i> fa-users
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-video-camera"></i> fa-video-camera
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-volume-down"></i> fa-volume-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-volume-off"></i> fa-volume-off
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-volume-up"></i> fa-volume-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-warning"></i> fa-warning{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-wheelchair"></i> fa-wheelchair
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-wrench"></i> fa-wrench
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Spinner icons</h4>
                      <div className="alert alert-success mb-4">
                        {" "}
                        These icons work great with the <code>
                          fa-spin
                        </code>{" "}
                        className. Check out the{" "}
                        <a
                          href="http://fontawesome.io/examples/#animated"
                          className="alert-link"
                        >
                          spinning icons example
                        </a>
                        .{" "}
                      </div>
                      <div className="row icons-list">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spin fa-circle-o-notch"></i>{" "}
                          fa-circle-o-notch
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spin fa-cog"></i> fa-cog
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spin fa-gear"></i> fa-gear{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spin fa-refresh"></i> fa-refresh
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spin fa-spinner"></i> fa-spinner
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Form Control Icons</h4>
                      <div className="row icons-list">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-square"></i> fa-check-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-check-square-o"></i>{" "}
                          fa-check-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle"></i> fa-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-circle-o"></i> fa-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-dot-circle-o"></i> fa-dot-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus-square"></i> fa-minus-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-minus-square-o"></i>{" "}
                          fa-minus-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus-square"></i> fa-plus-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus-square-o"></i>{" "}
                          fa-plus-square-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-square"></i> fa-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-square-o"></i> fa-square-o
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Currency Icons</h4>
                      <div className="row icons-list">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bitcoin"></i> fa-bitcoin{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-btc"></i> fa-btc
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cny"></i> fa-cny{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-dollar"></i> fa-dollar{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-eur"></i> fa-eur
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-euro"></i> fa-euro{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gbp"></i> fa-gbp
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-inr"></i> fa-inr
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-jpy"></i> fa-jpy
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-krw"></i> fa-krw
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-money"></i> fa-money
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rmb"></i> fa-rmb{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rouble"></i> fa-rouble{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rub"></i> fa-rub
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ruble"></i> fa-ruble{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rupee"></i> fa-rupee{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-try"></i> fa-try
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-turkish-lira"></i> fa-turkish-lira{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-usd"></i> fa-usd
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-won"></i> fa-won{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-yen"></i> fa-yen{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Text Editor Icons</h4>
                      <div className="row icons-list">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-align-center"></i> fa-align-center
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-align-justify"></i>{" "}
                          fa-align-justify
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-align-left"></i> fa-align-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-align-right"></i> fa-align-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bold"></i> fa-bold
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chain"></i> fa-chain{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chain-broken"></i> fa-chain-broken
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-clipboard"></i> fa-clipboard
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-columns"></i> fa-columns
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-copy"></i> fa-copy{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-cut"></i> fa-cut{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-dedent"></i> fa-dedent{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-eraser"></i> fa-eraser
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file"></i> fa-file
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-o"></i> fa-file-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-text"></i> fa-file-text
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-file-text-o"></i> fa-file-text-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-files-o"></i> fa-files-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-floppy-o"></i> fa-floppy-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-font"></i> fa-font
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-header"></i> fa-header
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-indent"></i> fa-indent
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-italic"></i> fa-italic
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-link"></i> fa-link
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-list"></i> fa-list
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-list-alt"></i> fa-list-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-list-ol"></i> fa-list-ol
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-list-ul"></i> fa-list-ul
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-outdent"></i> fa-outdent
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-paperclip"></i> fa-paperclip
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-paragraph"></i> fa-paragraph
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-paste"></i> fa-paste{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-repeat"></i> fa-repeat
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rotate-left"></i> fa-rotate-left{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rotate-right"></i> fa-rotate-right{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-save"></i> fa-save{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-scissors"></i> fa-scissors
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-strikethrough"></i>{" "}
                          fa-strikethrough
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-subscript"></i> fa-subscript
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-superscript"></i> fa-superscript
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-table"></i> fa-table
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-text-height"></i> fa-text-height
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-text-width"></i> fa-text-width
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-th"></i> fa-th
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-th-large"></i> fa-th-large
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-th-list"></i> fa-th-list
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-underline"></i> fa-underline
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-undo"></i> fa-undo
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-unlink"></i> fa-unlink{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Directional Icons</h4>
                      <div className="row icons-list">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-angle-double-down"></i>{" "}
                          fa-angle-double-down{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-angle-double-left"></i>{" "}
                          fa-angle-double-left{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-angle-double-right"></i>{" "}
                          fa-angle-double-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-angle-double-up"></i>{" "}
                          fa-angle-double-up{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-angle-down"></i> fa-angle-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-angle-left"></i> fa-angle-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-angle-right"></i> fa-angle-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-angle-up"></i> fa-angle-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-circle-down"></i>{" "}
                          fa-arrow-circle-down{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-circle-left"></i>{" "}
                          fa-arrow-circle-left{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-circle-o-down"></i>{" "}
                          fa-arrow-circle-o-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-circle-o-left"></i>{" "}
                          fa-arrow-circle-o-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-circle-o-right"></i>{" "}
                          fa-arrow-circle-o-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-circle-o-up"></i>{" "}
                          fa-arrow-circle-o-up{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-circle-right"></i>{" "}
                          fa-arrow-circle-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-circle-up"></i>{" "}
                          fa-arrow-circle-up{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-down"></i> fa-arrow-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-left"></i> fa-arrow-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-right"></i> fa-arrow-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrow-up"></i> fa-arrow-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows"></i> fa-arrows
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows-alt"></i> fa-arrows-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows-h"></i> fa-arrows-h
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows-v"></i> fa-arrows-v
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-down"></i> fa-caret-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-left"></i> fa-caret-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-right"></i> fa-caret-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-up"></i> fa-caret-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-left"></i>{" "}
                          fa-caret-square-o-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-right"></i>{" "}
                          fa-caret-square-o-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-up"></i>{" "}
                          fa-caret-square-o-up{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-caret-square-o-down"></i>{" "}
                          fa-caret-square-o-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chevron-circle-down"></i>{" "}
                          fa-chevron-circle-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chevron-circle-left"></i>{" "}
                          fa-chevron-circle-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chevron-circle-right"></i>{" "}
                          fa-chevron-circle-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chevron-circle-up"></i>{" "}
                          fa-chevron-circle-up{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chevron-down"></i> fa-chevron-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chevron-left"></i> fa-chevron-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chevron-right"></i>{" "}
                          fa-chevron-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-chevron-up"></i> fa-chevron-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-hand-o-down"></i> fa-hand-o-down
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-hand-o-left"></i> fa-hand-o-left
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-hand-o-right"></i> fa-hand-o-right
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-hand-o-up"></i> fa-hand-o-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-long-arrow-down"></i>{" "}
                          fa-long-arrow-down{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-long-arrow-left"></i>{" "}
                          fa-long-arrow-left{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-long-arrow-right"></i>{" "}
                          fa-long-arrow-right{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-long-arrow-up"></i>{" "}
                          fa-long-arrow-up
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-down"></i> fa-toggle-down{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-left"></i> fa-toggle-left{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-right"></i> fa-toggle-right{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-toggle-up"></i> fa-toggle-up{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Video Player Icons</h4>
                      <div className="row icons-list">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-arrows-alt"></i> fa-arrows-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-backward"></i> fa-backward
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-compress"></i> fa-compress
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-eject"></i> fa-eject
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-expand"></i> fa-expand
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fast-backward"></i>{" "}
                          fa-fast-backward
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-fast-forward"></i> fa-fast-forward
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-forward"></i> fa-forward
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pause"></i> fa-pause
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-play"></i> fa-play
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-play-circle"></i> fa-play-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-play-circle-o"></i>{" "}
                          fa-play-circle-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-step-backward"></i>{" "}
                          fa-step-backward
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-step-forward"></i> fa-step-forward
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-stop"></i> fa-stop
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-youtube-play"></i> fa-youtube-play
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Brand Icons</h4>
                      <div className="row icons-list">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-adn"></i> fa-adn
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-android"></i> fa-android
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-apple"></i> fa-apple
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-behance"></i> fa-behance
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-behance-square"></i>{" "}
                          fa-behance-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bitbucket"></i> fa-bitbucket
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bitbucket-square"></i>{" "}
                          fa-bitbucket-square{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-bitcoin"></i> fa-bitcoin{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-btc"></i> fa-btc
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-codepen"></i> fa-codepen
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-css3"></i> fa-css3
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-delicious"></i> fa-delicious
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-deviantart"></i> fa-deviantart
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-digg"></i> fa-digg
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-dribbble"></i> fa-dribbble
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-dropbox"></i> fa-dropbox
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-drupal"></i> fa-drupal
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-empire"></i> fa-empire
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-facebook"></i> fa-facebook
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-facebook-square"></i>{" "}
                          fa-facebook-square{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-flickr"></i> fa-flickr
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-foursquare"></i> fa-foursquare
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ge"></i> fa-ge{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-git"></i> fa-git
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-git-square"></i> fa-git-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-github"></i> fa-github
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-github-alt"></i> fa-github-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-github-square"></i>{" "}
                          fa-github-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-gittip"></i> fa-gittip
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-google"></i> fa-google
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-google-plus"></i> fa-google-plus
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-google-plus-square"></i>{" "}
                          fa-google-plus-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-hacker-news"></i> fa-hacker-news
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-html5"></i> fa-html5
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-instagram"></i> fa-instagram
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-joomla"></i> fa-joomla
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-jsfiddle"></i> fa-jsfiddle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-linkedin"></i> fa-linkedin
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-linkedin-square"></i>{" "}
                          fa-linkedin-square{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-linux"></i> fa-linux
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-maxcdn"></i> fa-maxcdn
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-openid"></i> fa-openid
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pagelines"></i> fa-pagelines
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pied-piper"></i> fa-pied-piper
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pied-piper-alt"></i>{" "}
                          fa-pied-piper-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pinterest"></i> fa-pinterest
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-pinterest-square"></i>{" "}
                          fa-pinterest-square{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-qq"></i> fa-qq
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ra"></i> fa-ra{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-rebel"></i> fa-rebel
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-reddit"></i> fa-reddit
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-reddit-square"></i>{" "}
                          fa-reddit-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-renren"></i> fa-renren
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-alt"></i> fa-share-alt
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-share-alt-square"></i>{" "}
                          fa-share-alt-square{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-skype"></i> fa-skype
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-slack"></i> fa-slack
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-soundcloud"></i> fa-soundcloud
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-spotify"></i> fa-spotify
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-stack-exchange"></i>{" "}
                          fa-stack-exchange
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-stack-overflow"></i>{" "}
                          fa-stack-overflow
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-steam"></i> fa-steam
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-steam-square"></i> fa-steam-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-stumbleupon"></i> fa-stumbleupon
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-stumbleupon-circle"></i>{" "}
                          fa-stumbleupon-circle
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tencent-weibo"></i>{" "}
                          fa-tencent-weibo
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-trello"></i> fa-trello
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tumblr"></i> fa-tumblr
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-tumblr-square"></i>{" "}
                          fa-tumblr-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-twitter"></i> fa-twitter
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-twitter-square"></i>{" "}
                          fa-twitter-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-vimeo-square"></i> fa-vimeo-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-vine"></i> fa-vine
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-vk"></i> fa-vk
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-wechat"></i> fa-wechat{" "}
                          <span className="text-muted">(alias)</span>{" "}
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-weibo"></i> fa-weibo
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-weixin"></i> fa-weixin
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-windows"></i> fa-windows
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-wordpress"></i> fa-wordpress
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-xing"></i> fa-xing
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-xing-square"></i> fa-xing-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-yahoo"></i> fa-yahoo
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-youtube"></i> fa-youtube
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-youtube-play"></i> fa-youtube-play
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-youtube-square"></i>{" "}
                          fa-youtube-square
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Medical Icons</h4>
                      <div className="row icons-list">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-ambulance"></i> fa-ambulance
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-h-square"></i> fa-h-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-hospital-o"></i> fa-hospital-o
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-medkit"></i> fa-medkit
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-plus-square"></i> fa-plus-square
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-stethoscope"></i> fa-stethoscope
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-user-md"></i> fa-user-md
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                          <i className="fa fa-wheelchair"></i> fa-wheelchair
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
      {/* Vendor Scripts */}
      <Script
        src="/vendors/js/vendor.bundle.base.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
        strategy="beforeInteractive"
      />

      {/* Page-specific JS */}
      <Script src="/js/off-canvas.js" strategy="lazyOnload" />
      <Script src="/js/template.js" strategy="lazyOnload" />
      <Script src="/js/settings.js" strategy="lazyOnload" />
      <Script src="/js/hoverable-collapse.js" strategy="lazyOnload" />
      <Script src="/js/todolist.js" strategy="lazyOnload" />
    </>
  );
}
