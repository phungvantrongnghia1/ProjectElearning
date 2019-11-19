import React, { Fragment } from "react";

export default function HomeAdmin() {
  return (
    <Fragment>
      <div className="main-content">
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget">
                <div className="widget-body">
                  <div
                    className="d-flex
                              justify-content-between
                              align-items-center"
                  >
                    <div className="state">
                      <h6>Courses</h6>
                      <h2>1,410</h2>
                    </div>
                    <div className="icon">
                      <i className="ik ik-award" />
                    </div>
                  </div>
                  <small className="text-small mt-10 d-block">
                    6% higher than last month
                  </small>
                </div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-valuenow={62}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "62%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget">
                <div className="widget-body">
                  <div
                    className="d-flex
                              justify-content-between
                              align-items-center"
                  >
                    <div className="state">
                      <h6>Likes</h6>
                      <h2>41,410</h2>
                    </div>
                    <div className="icon">
                      <i className="ik ik-thumbs-up" />
                    </div>
                  </div>
                  <small className="text-small mt-10 d-block">
                    61% higher than last month
                  </small>
                </div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow={78}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "78%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget">
                <div className="widget-body">
                  <div
                    className="d-flex
                              justify-content-between
                              align-items-center"
                  >
                    <div className="state">
                      <h6>Events</h6>
                      <h2>410</h2>
                    </div>
                    <div className="icon">
                      <i className="ik ik-calendar" />
                    </div>
                  </div>
                  <small className="text-small mt-10 d-block">
                    Total Events
                  </small>
                </div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    aria-valuenow={31}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "31%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget">
                <div className="widget-body">
                  <div
                    className="d-flex
                              justify-content-between
                              align-items-center"
                  >
                    <div className="state">
                      <h6>Comments</h6>
                      <h2>41,410</h2>
                    </div>
                    <div className="icon">
                      <i className="ik ik-message-square" />
                    </div>
                  </div>
                  <small className="text-small mt-10 d-block">
                    Total Comments
                  </small>
                </div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "20%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h3>Recent Chat</h3>
                  <div className="card-header-right">
                    <ul
                      className="list-unstyled
                                  card-option"
                    >
                      <li>
                        <i
                          className="ik ik-chevron-left
                                          action-toggle"
                        />
                      </li>
                      <li>
                        <i
                          className="ik ik-minus
                                          minimize-card"
                        />
                      </li>
                      <li>
                        <i
                          className="ik ik-x
                                          close-card"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="card-body chat-box scrollable"
                  style={{ height: 300 }}
                >
                  <ul className="chat-list">
                    <li className="chat-item">
                      <div className="chat-img">
                        <img
                          src="https://cyberlearn-21.web.app/img/teacher.jpg"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="chat-content">
                        <h6 className="font-medium">James Anderson</h6>
                        <div
                          className="box
                                          bg-light-info"
                        >
                          Lorem Ipsum is simply dummy text of the printing &amp;
                          type setting industry.
                        </div>
                      </div>
                      <div className="chat-time">10:56 am</div>
                    </li>
                    <li className="chat-item">
                      <div className="chat-img">
                        <img
                          src="https://cyberlearn-21.web.app/img/teacher.jpg"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="chat-content">
                        <h6 className="font-medium">Bianca Doe</h6>
                        <div
                          className="box
                                          bg-light-info"
                        >
                          It’s Great opportunity to work.
                        </div>
                      </div>
                      <div className="chat-time">10:57 am</div>
                    </li>
                    <li className="odd chat-item">
                      <div className="chat-content">
                        <div
                          className="box
                                          bg-light-inverse"
                        >
                          I would love to join the team.
                        </div>
                        <br />
                      </div>
                    </li>
                    <li className="odd chat-item">
                      <div className="chat-content">
                        <div
                          className="box
                                          bg-light-inverse"
                        >
                          Whats budget of the new project.
                        </div>
                        <br />
                      </div>
                      <div className="chat-time">10:59 am</div>
                    </li>
                    <li className="chat-item">
                      <div className="chat-img">
                        <img
                          src="https://cyberlearn-21.web.app/img/teacher.jpg"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="chat-content">
                        <h6 className="font-medium">Angelina Rhodes</h6>
                        <div
                          className="box
                                          bg-light-info"
                        >
                          Well we have good budget for the project
                        </div>
                      </div>
                      <div className="chat-time">11:00 am</div>
                    </li>
                  </ul>
                </div>
                <div className="card-footer chat-footer">
                  <div className="input-wrap">
                    <input
                      type="text"
                      placeholder="Type
                                  and enter"
                      className="form-control"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn
                              btn-icon btn-theme"
                  >
                    <i
                      className="fa
                                  fa-paper-plane"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <h4 className="card-title">Weather Report</h4>
                    <select
                      className="form-control w-25
                                  ml-auto"
                    >
                      <option selected>Today</option>
                      <option value={1}>Weekly</option>
                    </select>
                  </div>
                  <div
                    className="d-flex align-items-center
                              flex-row mt-30"
                  >
                    <div className="p-2 f-50 text-info">
                      <i className="wi wi-day-showers" />
                      <span>
                        23<sup>°</sup>
                      </span>
                    </div>
                    <div className="p-2">
                      <h3 className="mb-0">Saturday</h3>
                      <small>Banglore, India</small>
                    </div>
                  </div>
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>Wind</td>
                        <td className="font-medium">ESE 17 mph</td>
                      </tr>
                      <tr>
                        <td>Humidity</td>
                        <td className="font-medium">83%</td>
                      </tr>
                      <tr>
                        <td>Pressure</td>
                        <td className="font-medium">28.56 in</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <ul
                    className="list-unstyled row text-center
                              city-weather-days mb-0 mt-20"
                  >
                    <li className="col">
                      <i
                        className="wi
                                      wi-day-sunny mr-5"
                      />
                      <span>09:30</span>
                      <h3>
                        20<sup>°</sup>
                      </h3>
                    </li>
                    <li className="col">
                      <i
                        className="wi
                                      wi-day-cloudy mr-5"
                      />
                      <span>11:30</span>
                      <h3>
                        22<sup>°</sup>
                      </h3>
                    </li>
                    <li className="col">
                      <i
                        className="wi
                                      wi-day-hail mr-5"
                      />
                      <span>13:30</span>
                      <h3>
                        25<sup>°</sup>
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ minHeight: 422 }}>
                <div className="card-header">
                  <h3>Timeline</h3>
                  <div className="card-header-right">
                    <ul
                      className="list-unstyled
                                  card-option"
                    >
                      <li>
                        <i
                          className="ik ik-chevron-left
                                          action-toggle"
                        />
                      </li>
                      <li>
                        <i
                          className="ik ik-minus
                                          minimize-card"
                        />
                      </li>
                      <li>
                        <i
                          className="ik ik-x
                                          close-card"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body timeline">
                  <div
                    className="header bg-theme"
                    style={{
                      backgroundImage:
                        'url("img/placeholder/placeimg_400_200_nature.jpg")'
                    }}
                  >
                    <div
                      className="color-overlay d-flex
                                  align-items-center"
                    >
                      <div className="day-number">8</div>
                      <div className="date-right">
                        <div className="day-name">Monday</div>
                        <div className="month">February 2018</div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="bullet bg-pink" />
                      <div className="time">11am</div>
                      <div className="desc">
                        <h3>Attendance</h3>
                        <h4>Computer Class</h4>
                      </div>
                    </li>
                    <li>
                      <div className="bullet bg-green" />
                      <div className="time">12pm</div>
                      <div className="desc">
                        <h3>Design Team</h3>
                        <h4>Hangouts</h4>
                      </div>
                    </li>
                    <li>
                      <div className="bullet bg-orange" />
                      <div className="time">2pm</div>
                      <div className="desc">
                        <h3>Finish</h3>
                        <h4>Go to Home</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header row">
              <div className="col col-sm-3">
                <div className="card-options d-inline-block">
                  <a href="#a">
                    <i className="ik ik-inbox" />
                  </a>
                  <a href="#a">
                    <i className="ik ik-plus" />
                  </a>
                  <a href="#a">
                    <i className="ik ik-rotate-cw" />
                  </a>
                  <div className="dropdown d-inline-block">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#a"
                      id="moreDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i
                        className="ik
                                      ik-more-horizontal"
                      />
                    </a>
                    <div
                      className="dropdown-menu
                                  dropdown-menu-right"
                      aria-labelledby="moreDropdown"
                    >
                      <a className="dropdown-item" href="#a">
                        Action
                      </a>
                      <a className="dropdown-item" href="#a">
                        More Action
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-sm-6">
                <div
                  className="card-search with-adv-search
                          dropdown"
                >
                  <form action>
                    <input
                      type="text"
                      className="form-control
                                  global_filter"
                      id="global_filter"
                      placeholder="Search.."
                      required
                    />
                    <button
                      type="submit"
                      className="btn
                                  btn-icon"
                    >
                      <i
                        className="ik
                                      ik-search"
                      />
                    </button>
                    <button
                      type="button"
                      id="adv_wrap_toggler"
                      className="adv-btn ik
                                  ik-chevron-down dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    />
                    <div
                      className="adv-search-wrap
                                  dropdown-menu
                                  dropdown-menu-right"
                      aria-labelledby="adv_wrap_toggler"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control
                                                  column_filter"
                              id="col0_filter"
                              placeholder="Name"
                              data-column={0}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control
                                                  column_filter"
                              id="col1_filter"
                              placeholder="Position"
                              data-column={1}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control
                                                  column_filter"
                              id="col2_filter"
                              placeholder="Office"
                              data-column={2}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control
                                                  column_filter"
                              id="col3_filter"
                              placeholder="Age"
                              data-column={3}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control
                                                  column_filter"
                              id="col4_filter"
                              placeholder="Start
                                                  date"
                              data-column={4}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control
                                                  column_filter"
                              id="col5_filter"
                              placeholder="Salary"
                              data-column={5}
                            />
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-theme">Search</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col col-sm-3">
                <div className="card-options text-right">
                  <span className="mr-5" id="top">
                    1 - 50 of 2,500
                  </span>
                  <a href="#a">
                    <i
                      className="ik
                                  ik-chevron-left"
                    />
                  </a>
                  <a href="#a">
                    <i
                      className="ik
                                  ik-chevron-right"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table id="advanced_table" className="table">
                <thead>
                  <tr>
                    <th className="nosort" width={10}>
                      <label
                        className="custom-control
                                      custom-checkbox m-0"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="selectall"
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </th>
                    <th className="nosort">Avatar</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label
                        className="custom-control
                                      custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input
                                          select_all_child"
                          id
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </td>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        className="custom-control
                                      custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input
                                          select_all_child"
                          id
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </td>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        className="custom-control
                                      custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input
                                          select_all_child"
                          id
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </td>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        className="custom-control
                                      custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input
                                          select_all_child"
                          id
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </td>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                    <td>2012/03/29</td>
                    <td>$433,060</td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        className="custom-control
                                      custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input
                                          select_all_child"
                          id
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </td>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>2008/11/28</td>
                    <td>$162,700</td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        className="custom-control
                                      custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input
                                          select_all_child"
                          id
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </td>
                    <td>Brielle Williamson</td>
                    <td>Integration Specialist</td>
                    <td>New York</td>
                    <td>61</td>
                    <td>2012/12/02</td>
                    <td>$372,000</td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        className="custom-control
                                      custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input
                                          select_all_child"
                          id
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </td>
                    <td>Herrod Chandler</td>
                    <td>Sales Assistant</td>
                    <td>San Francisco</td>
                    <td>59</td>
                    <td>2012/08/06</td>
                    <td>$137,500</td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        className="custom-control
                                      custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input
                                          select_all_child"
                          id
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </td>
                    <td>Rhona Davidson</td>
                    <td>Integration Specialist</td>
                    <td>Tokyo</td>
                    <td>55</td>
                    <td>2010/10/14</td>
                    <td>$327,900</td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        className="custom-control
                                      custom-checkbox"
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input
                                          select_all_child"
                          id
                          name
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </td>
                    <td>Colleen Hurst</td>
                    <td>Javascript Developer</td>
                    <td>San Francisco</td>
                    <td>39</td>
                    <td>2009/09/15</td>
                    <td>$205,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-panel" hidden>
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <a href="javascript:void(0);">
              <i
                className="ik
                      ik-message-square text-success"
              />
            </a>
            <span className="user-name">John Doe</span>
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="card-body">
            <div className="widget-chat-activity flex-1">
              <div className="messages">
                <div className="message media reply">
                  <figure className="user--online">
                    <a href="#a">
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </a>
                  </figure>
                  <div className="message-body media-body">
                    <p>Epic Cheeseburgers come in all kind of styles.</p>
                  </div>
                </div>
                <div className="message media">
                  <figure className="user--online">
                    <a href="#a">
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </a>
                  </figure>
                  <div className="message-body media-body">
                    <p>Cheeseburgers make your knees weak.</p>
                  </div>
                </div>
                <div className="message media reply">
                  <figure className="user--offline">
                    <a href="#a">
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </a>
                  </figure>
                  <div className="message-body media-body">
                    <p>Cheeseburgers will never let you down.</p>
                    <p>They'll also never run around or desert you.</p>
                  </div>
                </div>
                <div className="message media">
                  <figure className="user--online">
                    <a href="#a">
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </a>
                  </figure>
                  <div className="message-body media-body">
                    <p>A great cheeseburger is a gastronomical event.</p>
                  </div>
                </div>
                <div className="message media reply">
                  <figure className="user--busy">
                    <a href="#a">
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </a>
                  </figure>
                  <div className="message-body media-body">
                    <p>
                      There's a cheesy incarnation waiting for you no matter
                      what you palete preferences are.
                    </p>
                  </div>
                </div>
                <div className="message media">
                  <figure className="user--online">
                    <a href="#a">
                      <img
                        src="https://cyberlearn-21.web.app/img/teacher.jpg"
                        className="rounded-circle"
                        alt
                      />
                    </a>
                  </figure>
                  <div className="message-body media-body">
                    <p>If you are a vegan, we are sorry for you loss.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            // eslint-disable-next-line no-script-url
            action="javascript:void(0)"
            className="card-footer"
            method="post"
          >
            <div className="d-flex justify-content-end">
              <textarea
                className="border-0 flex-1"
                rows={1}
                placeholder="Type your message here"
                defaultValue={""}
              />
              <button className="btn btn-icon" type="submit">
                <i className="ik ik-arrow-right text-success" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="w-100 clearfix">
          <span
            className="text-center text-sm-left
              d-md-inline-block"
          >
            Copyright © 2018 ThemeKit v2.0. All Rights Reserved.
          </span>
          <span
            className="float-none float-sm-right mt-1 mt-sm-0
              text-center"
          >
            Crafted with
            <i
              className="fa fa-heart
                  text-danger"
            />
            <a href="http://lavalite.org/" className="text-dark">
              Lavalite
            </a>
          </span>
        </div>
      </footer>

      <div
        className="modal fade apps-modal"
        id="appsModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="appsModalLabel"
        aria-hidden="true"
        data-backdrop="false"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <i className="ik ik-x-circle" />
        </button>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="quick-search">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 ml-auto mr-auto">
                    <div className="input-wrap">
                      <input
                        type="text"
                        id="quick-search"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <i className="ik ik-search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="container">
                <div className="apps-wrap">
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-bar-chart-2" />
                      <span>Dashboard</span>
                    </a>
                  </div>
                  <div className="app-item dropdown">
                    <a
                      href="#a"
                      className="dropdown-toggle"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i
                        className="ik
                              ik-command"
                      />
                      <span>Ui</span>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#a">
                        Action
                      </a>
                      <a className="dropdown-item" href="#a">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#a">
                        Something else here
                      </a>
                    </div>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-mail" />
                      <span>Message</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-users" />
                      <span>Accounts</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-shopping-cart" />
                      <span>Sales</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-briefcase" />
                      <span>Purchase</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-server" />
                      <span>Menus</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-clipboard" />
                      <span>Pages</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-message-square" />
                      <span>Chats</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-map-pin" />
                      <span>Contacts</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-box" />
                      <span>Blocks</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-calendar" />
                      <span>Events</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-bell" />
                      <span>Notifications</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-pie-chart" />
                      <span>Reports</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-layers" />
                      <span>Tasks</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-edit" />
                      <span>Blogs</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i className="ik ik-settings" />
                      <span>Settings</span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="#a">
                      <i
                        className="ik
                              ik-more-horizontal"
                      />
                      <span>More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
