import React from "react";
import { Link } from "react-router-dom";
export default function AdminLayout() {
  return (
    <div class="wrapper">
      <header className="header-top" header-theme="light">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <div className="top-menu d-flex align-items-center">
              <button
                type="button"
                className="btn-icon
                  mobile-nav-toggle d-lg-none"
              >
                <span />
              </button>
              <div className="header-search">
                <div className="input-group">
                  <span
                    className="input-group-addon
                          search-close"
                  >
                    <i className="ik ik-x" />
                  </span>
                  <input type="text" className="form-control" />
                  <span className="input-group-addon search-btn">
                    <i className="ik ik-search" />
                  </span>
                </div>
              </div>
              <button type="button" id="navbar-fullscreen" className="nav-link">
                <i className="ik ik-maximize" />
              </button>
            </div>
            <div className="top-menu d-flex align-items-center">
              <div className="dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#a"
                  id="notiDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ik ik-bell" />
                  <span className="badge bg-danger">3</span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right
                      notification-dropdown"
                  aria-labelledby="notiDropdown"
                >
                  <h4 className="header">Notifications</h4>
                  <div className="notifications-wrap">
                    <a href="#a" className="media">
                      <span className="d-flex">
                        <i className="ik ik-check" />
                      </span>
                      <span className="media-body">
                        <span
                          className="heading-font-family
                                      media-heading"
                        >
                          Invitation accepted
                        </span>
                        <span className="media-content">
                          Your have been Invited ...
                        </span>
                      </span>
                    </a>
                    <a href="#a" className="media">
                      <span className="d-flex">
                        <img
                          src="https://cyberlearn-21.web.app/img/teacher.jpg"
                          className="rounded-circle"
                          alt
                        />
                      </span>
                      <span className="media-body">
                        <span
                          className="heading-font-family
                                      media-heading"
                        >
                          Steve Smith
                        </span>
                        <span className="media-content">
                          I slowly updated projects
                        </span>
                      </span>
                    </a>
                    <a href="#a" className="media">
                      <span className="d-flex">
                        <i className="ik ik-calendar" />
                      </span>
                      <span className="media-body">
                        <span
                          className="heading-font-family
                                      media-heading"
                        >
                          To Do
                        </span>
                        <span className="media-content">
                          Meeting with Nathan on Friday 8 AM ...
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="footer">
                    <a href="javascript:void(0);">See all activity</a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="nav-link ml-10
                  right-sidebar-toggle"
              >
                <i
                  className="ik
                      ik-message-square"
                />
                <span
                  className="badge
                      bg-success"
                >
                  3
                </span>
              </button>
              <div className="dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#a"
                  id="menuDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ik ik-plus" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right
                      menu-grid"
                  aria-labelledby="menuDropdown"
                >
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Dashboard"
                  >
                    <i className="ik ik-bar-chart-2" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Message"
                  >
                    <i className="ik ik-mail" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Accounts"
                  >
                    <i className="ik ik-users" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Sales"
                  >
                    <i className="ik ik-shopping-cart" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Purchase"
                  >
                    <i className="ik ik-briefcase" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Pages"
                  >
                    <i className="ik ik-clipboard" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chats"
                  >
                    <i className="ik ik-message-square" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Contacts"
                  >
                    <i className="ik ik-map-pin" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Blocks"
                  >
                    <i className="ik ik-inbox" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Events"
                  >
                    <i className="ik ik-calendar" />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Notifications"
                  >
                    <i
                      className="ik
                              ik-bell"
                    />
                  </a>
                  <a
                    className="dropdown-item"
                    href="#a"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="More"
                  >
                    <i className="ik ik-more-horizontal" />
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="nav-link ml-10"
                id="apps_modal_btn"
                data-toggle="modal"
                data-target="#appsModal"
              >
                <i className="ik ik-grid" />
              </button>
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="#a"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="https://cyberlearn-21.web.app/img/teacher.jpg"
                    className="rounded-circle"
                    alt
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="profile.html">
                    <i
                      className="ik ik-user
                              dropdown-icon"
                    />
                    Profile
                  </a>
                  <a className="dropdown-item" href="#a">
                    <i
                      className="ik ik-settings
                              dropdown-icon"
                    />
                    Settings
                  </a>
                  <a className="dropdown-item" href="#a">
                    <span className="float-right">
                      <span className="badge badge-primary">6</span>
                    </span>
                    <i className="ik ik-mail dropdown-icon" />
                    Inbox
                  </a>
                  <a className="dropdown-item" href="#a">
                    <i
                      className="ik ik-navigation
                              dropdown-icon"
                    />
                    Message
                  </a>
                  <a className="dropdown-item" href="login.html">
                    <i className="ik ik-power dropdown-icon" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="page-wrap">
        <div className="app-sidebar colored">
          <div className="sidebar-header">
            <a className="header-brand" href="index.html">
              <span className="text">ThemeKit</span>
            </a>
            <button type="button" className="nav-toggle">
              <i
                data-toggle="expanded"
                className="ik ik-toggle-right
                  toggle-icon"
              />
            </button>
            <button id="sidebarClose" className="nav-close">
              <i
                className="ik
                  ik-x"
              />
            </button>
          </div>
          <div className="sidebar-content">
            <div className="nav-container">
              <nav id="main-menu-navigation" className="navigation-main">
                <div className="nav-lavel">Dashboard</div>
                <div className="nav-item active">
                  <a href="index.html">
                    <i
                      className="ik
                              ik-bar-chart-2"
                    />
                    <span>Home</span>
                  </a>
                </div>

                <div className="nav-item has-sub">
                  <a href="javascript:void(0)">
                    <i
                      className="ik
                              ik-menu"
                    />
                    <span>Course</span>
                    <span className="badge badge-danger">150+</span>
                  </a>
                  <div className="submenu-content">
                    <Link className="menu-item" to="/course-list">
                      <i class="fas fa-list"></i> List
                    </Link>

                    <a href="pages/widget-statistic.html" className="menu-item">
                      <i class="fas fa-cog"></i> Custom
                    </a>
                  </div>
                </div>

                <div className="nav-item has-sub">
                  <a href="javascript:void(0)">
                    <i
                      className="ik
                              ik-layers"
                    />
                    <span>User</span>
                  </a>
                  <div className="submenu-content">
                    <a href="pages/widgets.html" className="menu-item">
                      student
                    </a>
                    <a href="pages/widget-statistic.html" className="menu-item">
                      User
                    </a>
                  </div>
                </div>

                <div className="nav-lavel">Tables</div>
                <div className="nav-item">
                  <a href="pages/table-bootstrap.html">
                    <i className="ik ik-credit-card" />
                    <span>Bootstrap Table</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="pages/table-datatable.html">
                    <i className="ik ik-inbox" />
                    <span>Data Table</span>
                  </a>
                </div>

                <div className="nav-item">
                  <a href="pages/layouts.html">
                    <i
                      className="ik
                              ik-layout"
                    />
                    <span>Layouts</span>
                    <span className="badge badge-success">New</span>
                  </a>
                </div>

                <div className="nav-lavel">Support</div>
                <div className="nav-item">
                  <a href="javascript:void(0)">
                    <i
                      className="ik
                              ik-monitor"
                    />
                    <span>Documentation</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="javascript:void(0)">
                    <i
                      className="ik
                              ik-help-circle"
                    />
                    <span>Submit Issue</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
