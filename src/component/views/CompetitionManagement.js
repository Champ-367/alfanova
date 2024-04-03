import { Link } from "react-router-dom";
import React from "react";
import AddQuestion from "../modal/AddQuestion";
function CompetitionManagement() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <AddQuestion show={modalShow} onHide={() => setModalShow(false)} />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body py-4 px-5">
                    <div className="d-flex align-items-start mb-5">
                      <div className="flex-grow-1">
                        <h5 className="card-title">Competitions Management</h5>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          to=""
                          className="btn card-btn btn-primary-color btn-primary"
                        >
                          <img src="/img/plus-circle.svg" /> Open Live Stream
                          Screen
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div
                          className="card mb-4"
                          style={{ border: "1px solid #E4E7EC" }}
                        >
                          <div className="card-body py-4 px-4">
                            <div
                              className="card"
                              style={{ border: "1px solid #E4E7EC" }}
                            >
                              <div className="card-body text-center py-4 px-5">
                                <h4>Answer</h4>
                                <h1 className="primary-color">Islamabad</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="card"
                          style={{ border: "1px solid #E4E7EC" }}
                        >
                          <div className="card-body py-4 px-4">
                            <h5>Tiktok Live Stream Messages</h5>
                            <div className=" mb-2 mt-3">
                              <div className="d-flex align-items-center border-bottom py-3">
                                <div className="avatar flex-shrink-0 me-3 d-flex">
                                  <img
                                    src="/img/profile.svg"
                                    alt=""
                                    className="img-fluid rounded-circle"
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  <div>
                                    <Link
                                      to=""
                                      href="pages-profile.html"
                                      className="font-size-14 text-dark mb-1"
                                    >
                                      maxjacobson
                                    </Link>
                                    <p className="font-size-13 text-muted mb-0">
                                      Now that’s a skill very talented
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center border-bottom py-3">
                                <div className="avatar flex-shrink-0 me-3 d-flex">
                                  <img
                                    src="/img/profile.svg"
                                    alt=""
                                    className="img-fluid rounded-circle"
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  <div>
                                    <Link
                                      to=""
                                      href="pages-profile.html"
                                      className="font-size-14 text-dark mb-1"
                                    >
                                      maxjacobson
                                    </Link>
                                    <p className="font-size-13 text-muted mb-0">
                                      Now that’s a skill very talented
                                    </p>
                                  </div>
                                </div>
                              </div>{" "}
                              <div className="d-flex align-items-center border-bottom py-3">
                                <div className="avatar flex-shrink-0 me-3 d-flex">
                                  <img
                                    src="/img/profile.svg"
                                    alt=""
                                    className="img-fluid rounded-circle"
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  <div>
                                    <Link
                                      to=""
                                      href="pages-profile.html"
                                      className="font-size-14 text-dark mb-1"
                                    >
                                      maxjacobson
                                    </Link>
                                    <p className="font-size-13 text-muted mb-0">
                                      Now that’s a skill very talented
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center py-3">
                                <div className="avatar flex-shrink-0 me-3 d-flex">
                                  <img
                                    src="/img/profile.svg"
                                    alt=""
                                    className="img-fluid rounded-circle"
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  <div>
                                    <Link
                                      to=""
                                      href="pages-profile.html"
                                      className="font-size-14 text-dark mb-1"
                                    >
                                      maxjacobson
                                    </Link>
                                    <p className="font-size-13 text-muted mb-0">
                                      Now that’s a skill very talented
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div
                          className="card mb-4"
                          style={{ border: "1px solid #E4E7EC" }}
                        >
                          <div className="card-body py-4 px-4">
                            <div className="d-flex align-items-start mb-5">
                              <div className="flex-grow-1">
                                <h4>Competitions Management</h4>
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  onClick={() => setModalShow(true)}
                                  className="btn d-flex align-items-center"
                                  style={{ border: "1px solid #000" }}
                                >
                                  <img src="/img/plus.svg" /> New Question
                                  Screen
                                </button>
                              </div>
                            </div>

                            <div className="table-responsive">
                              <table className="table project-list-table table-nowrap align-middle table-borderless mb-0">
                                <thead>
                                  <tr className="pb-5">
                                    {/* <th scope="col" style={{ width: 210 }}>
                                      Customer
                                    </th>
                                    <th scope="col" style={{ width: 140 }}>
                                      Product Name
                                    </th> */}
                                    <th scope="col">ID</th>
                                    <th scope="col">Question</th>
                                    <th scope="col">Answer</th>
                                    <th scope="col">Point</th>
                                    <th scope="col">Edit</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <span>001</span>
                                    </td>
                                    <td>Capital of Pakistan</td>
                                    <td>Islamabad</td>
                                    <td>20</td>
                                    <td>
                                      <img src="/img/dotted.svg" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span>002</span>
                                    </td>
                                    <td>Capital of Pakistan</td>
                                    <td>Islamabad</td>
                                    <td>20</td>
                                    <td>
                                      <img src="/img/dotted.svg" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span>003</span>
                                    </td>
                                    <td>Capital of Pakistan</td>
                                    <td>Islamabad</td>
                                    <td>20</td>
                                    <td>
                                      <img src="/img/dotted.svg" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span>004</span>
                                    </td>
                                    <td>Capital of Pakistan</td>
                                    <td>Islamabad</td>
                                    <td>20</td>
                                    <td>
                                      <img src="/img/dotted.svg" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span>005</span>
                                    </td>
                                    <td>Capital of Pakistan</td>
                                    <td>Islamabad</td>
                                    <td>20</td>
                                    <td>
                                      <img src="/img/dotted.svg" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span>006</span>
                                    </td>
                                    <td>Capital of Pakistan</td>
                                    <td>Islamabad</td>
                                    <td>20</td>
                                    <td>
                                      <img src="/img/dotted.svg" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span>007</span>
                                    </td>
                                    <td>Capital of Pakistan</td>
                                    <td>Islamabad</td>
                                    <td>20</td>
                                    <td>
                                      <img src="/img/dotted.svg" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span>008</span>
                                    </td>
                                    <td>Capital of Pakistan</td>
                                    <td>Islamabad</td>
                                    <td>20</td>
                                    <td>
                                      <img src="/img/dotted.svg" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row*/}
          </div>
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
      </div>
    </>
  );
}

export default CompetitionManagement;
