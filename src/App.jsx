import { Routes, Route } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Outlet,
  useNavigate,
  createSearchParams,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { LoginSignup } from "./pages/LoginSignup";
import { BoardIndex } from "./pages/BoardIndex";
import { BoardDetails } from "./pages/BoardDetails";
import { TaskDetails } from "./pages/TaskDetails";
import { RootModal } from "./modals/RootModal";
import { UserMsg } from "./cmp/UserMsg";
import { useSelector } from "react-redux";
import { AppHeader } from "./cmp/AppHeader";

export function App() {
  return (
    <Router>
      <main className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup?" element={<LoginSignup />} />
          <Route path="/logout" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<BoardIndex />} />
          <Route path="/board/:boardId" element={<BoardDetails />}>
            <Route path="/board/:boardId/:taskId" element={<TaskDetails />} />
          </Route>
        </Routes>
      </main>
      <RootModal />
      <UserMsg />
    </Router>
  );
}
