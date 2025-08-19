import Script from "next/script";

export default function TypographyPage() {
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
                      <a
                        className="nav-link"
                        href="././pages/ui-features/buttons.html"
                      >
                        Buttons
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="././pages/ui-features/dropdowns.html"
                      >
                        Dropdowns
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="././pages/ui-features/typography.html"
                      >
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
                        href="././pages/charts/chartjs.html"
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
                        href="././pages/tables/basic-table.html"
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
                        href="././pages/icons/font-awesome.html"
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
                        href="././pages/samples/blank-page.html"
                      >
                        {" "}
                        Blank Page{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="././pages/samples/error-404.html"
                      >
                        {" "}
                        404{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="././pages/samples/error-500.html"
                      >
                        {" "}
                        500{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="././pages/samples/login.html"
                      >
                        {" "}
                        Login{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="././pages/samples/register.html"
                      >
                        {" "}
                        Register{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="././docs/documentation.html">
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
                      <h4 className="card-title">Headings</h4>
                      <p className="card-description">
                        {" "}
                        Add tags <code>&lt;h1&gt;</code> to{" "}
                        <code>&lt;h6&gt;</code> or className <code>.h1</code> to{" "}
                        <code>.h6</code>
                      </p>
                      <div className="template-demo">
                        <h1>h1. Heading</h1>
                        <h2>h2. Heading</h2>
                        <h3>h3. Heading</h3>
                        <h4>h4. Heading</h4>
                        <h5>h5. Heading</h5>
                        <h6>h6. Heading</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">
                        Headings with secondary text
                      </h4>
                      <p className="card-description">
                        {" "}
                        Add faded secondary text to headings{" "}
                      </p>
                      <div className="template-demo">
                        <h1>
                          {" "}
                          h1. Heading{" "}
                          <small className="text-muted"> Secondary text </small>
                        </h1>
                        <h2>
                          {" "}
                          h2. Heading{" "}
                          <small className="text-muted"> Secondary text </small>
                        </h2>
                        <h3>
                          {" "}
                          h3. Heading{" "}
                          <small className="text-muted"> Secondary text </small>
                        </h3>
                        <h4>
                          {" "}
                          h4. Heading{" "}
                          <small className="text-muted"> Secondary text </small>
                        </h4>
                        <h5>
                          {" "}
                          h5. Heading{" "}
                          <small className="text-muted"> Secondary text </small>
                        </h5>
                        <h6>
                          {" "}
                          h6. Heading{" "}
                          <small className="text-muted"> Secondary text </small>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Display headings</h4>
                      <p className="card-description">
                        {" "}
                        Add className <code>.display1</code> to{" "}
                        <code>.display-4</code>
                      </p>
                      <div className="template-demo">
                        <h1 className="display-1">Display 1</h1>
                        <h1 className="display-2">Display 2</h1>
                        <h1 className="display-3">Display 3</h1>
                        <h1 className="display-4">Display 4</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Paragraph</h4>
                          <p className="card-description">
                            {" "}
                            Write text in <code>&lt;p&gt;</code> tag{" "}
                          </p>
                          <p>
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley not only five centuries,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Icon size</h4>
                          <p className="card-description">
                            {" "}
                            Add className <code>.icon-lg</code>,{" "}
                            <code>.icon-md</code>, <code>.icon-sm</code>
                          </p>
                          <div className="row">
                            <div className="col-md-4 d-flex align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <i className="ti-package icon-lg text-warning"></i>
                                <p className="mb-0 ms-1"> Icon-lg </p>
                              </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <i className="ti-package icon-md text-success"></i>
                                <p className="mb-0 ms-1"> Icon-md </p>
                              </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                              <div className="d-flex flex-row align-items-center">
                                <i className="ti-package icon-sm text-danger"></i>
                                <p className="mb-0 ms-1"> Icon-sm </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Blockquotes</h4>
                      <p className="card-description">
                        {" "}
                        Wrap content inside
                        <code>&lt;blockquote className="blockquote"&gt;</code>
                      </p>
                      <blockquote className="blockquote">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                      </blockquote>
                    </div>
                    <div className="card-body">
                      <blockquote className="blockquote blockquote-primary">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                          Someone famous in{" "}
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Address</h4>
                      <p className="card-description">
                        {" "}
                        Use <code>&lt;address&gt;</code> tag{" "}
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <address>
                            <p className="fw-bold">Star Admin2 inc.</p>
                            <p> 695 lsom Ave, </p>
                            <p> Suite 00 </p>
                            <p> San Francisco, CA 94107 </p>
                          </address>
                        </div>
                        <div className="col-md-6">
                          <address className="text-primary">
                            <p className="fw-bold"> E-mail </p>
                            <p className="mb-2"> johndoe@examplemeail.com </p>
                            <p className="fw-bold"> Web Address </p>
                            <p> www.starAdminPro.com </p>
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Lead</h4>
                      <p className="card-description">
                        {" "}
                        Use className <code>.lead</code>
                      </p>
                      <p className="lead">
                        {" "}
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                        dolor auctor.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Text colors</h4>
                      <p className="card-description">
                        {" "}
                        Use className <code>.text-primary</code>,{" "}
                        <code>.text-secondary</code> etc. for text in theme
                        colors{" "}
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <p className="text-primary">.text-primary</p>
                          <p className="text-success">.text-success</p>
                          <p className="text-danger">.text-danger</p>
                          <p className="text-warning">.text-warning</p>
                          <p className="text-info">.text-info</p>
                        </div>
                        <div className="col-md-6">
                          <p className="text-light bg-dark pl-1">.text-light</p>
                          <p className="text-secondary">.text-secondary</p>
                          <p className="text-dark">.text-dark</p>
                          <p className="text-muted">.text-muted</p>
                          <p className="text-white bg-dark pl-1">.text-white</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Top aligned media</h4>
                      <div className="media">
                        <i className="ti-world icon-md text-info d-flex align-self-start me-3"></i>
                        <div className="media-body">
                          <p className="card-text">
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Center aligned media</h4>
                      <div className="media">
                        <i className="ti-world icon-md text-info d-flex align-self-center me-3"></i>
                        <div className="media-body">
                          <p className="card-text">
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Bottom aligned media</h4>
                      <div className="media">
                        <i className="ti-world icon-md text-info d-flex align-self-end me-3"></i>
                        <div className="media-body">
                          <p className="card-text">
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Highlighted Text</h4>
                      <p className="card-description">
                        {" "}
                        Wrap the text in <code>&lt;mark&gt;</code> to highlight
                        text{" "}
                      </p>
                      <p>
                        {" "}
                        It is a long{" "}
                        <mark className="bg-warning text-white">
                          established
                        </mark>{" "}
                        fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less
                        normal distribution{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">List Unordered</h4>
                      <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Bold text</h4>
                      <p className="card-description">
                        {" "}
                        Use className<code>.fw-bold</code>
                      </p>
                      <p>
                        {" "}
                        It is a long{" "}
                        <span className="fw-bold">established fact</span> that a
                        reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal
                        distribution{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">List Ordered</h4>
                      <ol>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit{">"}</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title text-primary">Underline</h4>
                      <p className="card-description">
                        {" "}
                        Wrap in <code>&lt;u&gt;</code> tag for underline{" "}
                      </p>
                      <p>
                        <u>
                          lorem ipsum dolor sit amet, consectetur mod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </u>
                      </p>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-danger">Lowercase</h4>
                      <p className="card-description">
                        {" "}
                        Use className <code>.text-lowercase</code>
                      </p>
                      <p className="text-lowercase">
                        {" "}
                        lorem ipsum dolor sit amet, consectetur mod tempor
                        incididunt ut labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-warning">Uppercase</h4>
                      <p className="card-description">
                        {" "}
                        Use className <code>.text-uppercase</code>
                      </p>
                      <p className="text-uppercase">
                        {" "}
                        lorem ipsum dolor sit amet, consectetur mod tempor
                        incididunt ut labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Mute</h4>
                      <p className="card-description">
                        {" "}
                        Use className <code>.text-muted</code>
                      </p>
                      <p className="text-muted">
                        {" "}
                        lorem ipsum dolor sit amet, consectetur mod tempor
                        incididunt ut labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-success">Strike</h4>
                      <p className="card-description">
                        {" "}
                        Wrap content in <code>&lt;del&gt;</code> tag{" "}
                      </p>
                      <p>
                        <del>
                          {" "}
                          lorem ipsum dolor sit amet, consectetur mod tempor
                          incididunt ut labore et dolore magna aliqua.{" "}
                        </del>
                      </p>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-info">Capitalized</h4>
                      <p className="card-description">
                        {" "}
                        Use className <code>.text-capitalize</code>
                      </p>
                      <p className="text-capitalize">
                        {" "}
                        lorem ipsum dolor sit amet, consectetur mod tempor
                        incididunt ut labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">List with icon</h4>
                      <p className="card-description">
                        Add className <code>.list-ticked</code> to{" "}
                        <code>&lt;ul&gt;</code>
                      </p>
                      <ul className="list-ticked">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit{">"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">List with icon</h4>
                      <p className="card-description">
                        Add className <code>.list-arrow</code> to{" "}
                        <code>&lt;ul&gt;</code>
                      </p>
                      <ul className="list-arrow">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit{">"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">List with icon</h4>
                      <p className="card-description">
                        Add className <code>.list-star</code> to{" "}
                        <code>&lt;ul&gt;</code>
                      </p>
                      <ul className="list-star">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit{">"}</li>
                      </ul>
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
      <Script
        src="vendors/js/vendor.bundle.base.js"
        strategy="beforeInteractive"
      />
      <Script
        src="vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
        strategy="beforeInteractive"
      />

      {/* Custom scripts */}
      <Script src="js/off-canvas.js" strategy="lazyOnload" />
      <Script src="js/template.js" strategy="lazyOnload" />
      <Script src="js/settings.js" strategy="lazyOnload" />
      <Script src="js/hoverable-collapse.js" strategy="lazyOnload" />
      <Script src="js/todolist.js" strategy="lazyOnload" />
    </>
  );
}
