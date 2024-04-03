import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body py-4 px-5">
                    <div className="d-flex align-items-start mb-5">
                      <div className="flex-grow-1">
                        <h5 className="card-title">Competitions</h5>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          to="/competition-management"
                          className="btn card-btn btn-primary-color btn-primary"
                        >
                          <img src="/img/btnvector.svg" /> Primary
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5">
                      <img src="/img/homevector.svg" />
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

export default Home;
