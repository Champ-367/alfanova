import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              {/* <Link to="#" className="logo">
                <span className="logo-lg">
                  <img src="/img/logo.svg" alt="" />
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
