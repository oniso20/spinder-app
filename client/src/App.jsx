import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Onboarding from "./pages/Onboarding";
import ChatContainer from "./components/ChatContainer";
import Whatever from "./pages/Whatever";
// import AuthModal1 from "./components/AuthModal1";
// import Auth from "./components/Auth";
// import { useUserContext } from "./context/UserContext";
// import { useState } from "react";

const App = () => {
  // const { user, loading, error } = useUserContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/whatever" element={<Whatever />} />
          <Route path="/chatcontainer" element={<ChatContainer />} />
  
          {/* <Route path="/auth" element={<AuthModal1 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
