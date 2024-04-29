import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signup from "./pages/Signup";
import Podcasts from "./pages/Podcasts";
import CreateAPodcast from "./pages/CreateAPodcast";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
    />
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Signup />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/create-a-podcast" element={<CreateAPodcast />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  </div>
);
