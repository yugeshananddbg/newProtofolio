import { About, Footer, Header, Skill } from "./Container";
import { Navbar } from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Me from "./Components/About/Me";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Project/Work";
import Loader from "./Components/Loader/Loader";
import Login from "./Components/Login/Login";
import AdminPanel from "./Components/Admin/AdminPanel";
import Timeline from "./Components/Admin/Timeline"
import Time from "./Container/Timeline/Time"
import ProjectAdd from "./Components/Admin/ProjectAdd"
import Youtube from "./Components/Admin/Youtube";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { getUser, loadUser } from "./Actions/userAction";
import React, { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.login);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        
        
        {loading ? (
          <Loader />
        ) : (
          <>
            <Routes>
              <Route path="/"  element={<Header user={user} />} />
             
              <Route path="/about" element={<Me about={user.about} />} />
              <Route path="/work" element={<Work projects={user.projects} />} />
              <Route path="/contact" element={<Contact />} />

              <Route
                path="/Account"
                element={isAuthenticated ? <AdminPanel /> : <Login />}
              />
              <Route
                path="/admin/timeline"
                element={isAuthenticated ? <Timeline /> : <Login />}
              />
              <Route
                path="/admin/youtube"
                element={isAuthenticated ? <Youtube /> : <Login />}
              />

              <Route
                path="/admin/project"
                element={isAuthenticated ? <ProjectAdd /> : <Login />}
              />
            </Routes>

            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
