import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="vertical-menu">
        {/* LOGO */}
        <div className="navbar-brand-box">
          <Link to="/" className="logo">
            <span className="logo-lg">
              <img src="/img/logo.svg" alt="" />{" "}
            </span>
          </Link>
        </div>

        <div data-simplebar="" className="sidebar-menu-scroll">
          {/*- Sidemenu */}
          <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul
              className="metismenu list-unstyled"
              style={{ marginTop: "100px" }}
              id="side-menu"
            >
              <li>
                <Link
                  to=""
                  class="btn btn-primary-color side-btn btn-primary btn-rounded"
                >
                  <img src="/img/btnvector.svg" /> Primary
                </Link>
              </li>
            </ul>
          </div>
          {/* Sidebar */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
