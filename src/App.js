import React, { Suspense } from "react";
import "./App.css";
import "./sass/index.scss";
import "./css/index.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Section/Home";

const LazyLoadedAdmin = React.lazy(() => import("./Section/Admin"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLoadedAdmin />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
