import React from "react";
import { useCookies } from "react-cookie";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Dash from "./pages/Dash";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Onboarding from "./pages/Onboarding";
import ChatContainer from "./components/ChatContainer";
import BrowseProfiles from "./pages/BrowseProfiles";
import Music from "./components/Music";
import About from "./pages/About";



const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const authToken = cookies.AuthToken;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {authToken && <Route path="/onboarding" element={<Onboarding />} />}
          {authToken && <Route path="/browse" element={<BrowseProfiles />} />}
          {authToken && <Route path="/dash" element={<Dash />} />}
          <Route path="/music" element={<Music />} />
          <Route path="/chatcontainer" element={<ChatContainer />} />

          {/* <Route path="/auth" element={<AuthModal1 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
