"use client";

export default function Navbar({
  notificationOpen,
  setNotificationOpen,
  profileOpen,
  setProfileOpen,
  sidebarMinimized,
  setSidebarMinimized,
  offcanvasOpen,
  setOffcanvasOpen,
}) {
  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
        <div className="me-3">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => setSidebarMinimized(!sidebarMinimized)}
          >
            <span className="icon-menu"></span>
          </button>
        </div>
        <div>
          <a className="navbar-brand brand-logo" href="/">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <a
            className="navbar-brand brand-logo-mini d-lg-none"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setProfileOpen(!profileOpen);
            }}
          >
            <img
              className="img-xs rounded-circle"
              src="/images/faces/face8.jpg"
              alt="Profile"
            />
          </a>

          <div
            className={`dropdown-menu dropdown-menu-right navbar-dropdown d-lg-none ${
              profileOpen ? "show" : ""
            }`}
            style={{ position: "absolute", top: "60px", right: "10px" }}
          >
            <div className="dropdown-header text-center">
              <img
                className="img-md rounded-circle"
                src="/images/faces/face8.jpg"
                alt="Profile image"
              />
              <p className="mb-1 mt-3 fw-semibold">Allen Moreno</p>
              <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
            </div>
            <a className="dropdown-item">
              <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>
              My Profile{" "}
              <span className="badge badge-pill badge-danger">1</span>
            </a>
            <a className="dropdown-item">
              <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i>
              Messages
            </a>
            <a className="dropdown-item">
              <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i>
              Activity
            </a>
            <a className="dropdown-item">
              <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i>
              FAQ
            </a>
            <a className="dropdown-item">
              <i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>
              Sign Out
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-menu-wrapper d-flex align-items-top">
        <ul className="navbar-nav">
          <li className="nav-item fw-semibold ms-0 d-none d-lg-block">
            <h1 className="mdern-welcome-text">
              Welcome, <span className="text-black fw-bold">Doe</span>
            </h1>
          </li>

          <li className="nav-item fw-semibold ms-0 d-block d-lg-none text-center">
            <h4 className="mdern-welcome-text mb-0">
              Welcome, <span className="text-black fw-bold">Doe</span>
            </h4>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setNotificationOpen(!notificationOpen);
              }}
            >
              <i className="icon-bell"></i>
              <span className="count"></span>
            </a>
            <div
              className={`dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0 ${
                notificationOpen ? "show" : ""
              }`}
            >
              <a className="dropdown-item py-3 border-bottom">
                <p className="mb-0 fw-medium float-start">
                  You have 4 new notifications
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
                  <p className="fw-light small-text mb-0">Just now</p>
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
                  <p className="fw-light small-text mb-0">Private message</p>
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
                  <p className="fw-light small-text mb-0">2 days ago</p>
                </div>
              </a>
            </div>
          </li>

          <li className="nav-item dropdown d-none d-lg-block user-dropdown">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setProfileOpen(!profileOpen);
              }}
            >
              <img
                className="img-xs rounded-circle"
                src="/images/faces/face8.jpg"
                alt="Profile image"
              />
            </a>
            <div
              className={`dropdown-menu dropdown-menu-right navbar-dropdown ${
                profileOpen ? "show" : ""
              }`}
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
                <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>
                My Profile{" "}
                <span className="badge badge-pill badge-danger">1</span>
              </a>
              <a className="dropdown-item">
                <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i>
                Messages
              </a>
              <a className="dropdown-item">
                <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i>
                Activity
              </a>
              <a className="dropdown-item">
                <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i>
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
          onClick={() => setOffcanvasOpen(!offcanvasOpen)}
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
}
