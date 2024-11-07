import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ApiDataPage from "./ApiDataPage.js";
import StaticDataPage from "./StaticDataPage";

const App = () => {
  return (
    <Router>
      <div className="row py-4">
        <div className="text-center col-12">
          <h1>Table Data Examples</h1>
          <p>Select a page to view table data</p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/static-data" className="btn btn-primary">
              Go to Static Data Page
            </Link>
            <Link to="/api-data" className="btn btn-secondary">
              Go to API Data Page
            </Link>
          </div>
        </div>

        {/* Define routes for each page */}
        <div className="col-12">
          <Routes>
            <Route path="/static-data" element={<StaticDataPage />} />
            <Route path="/api-data" element={<ApiDataPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
