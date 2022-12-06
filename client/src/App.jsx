import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Onboarding from "./pages/Onboarding";
import ChatContainer from "./components/ChatContainer";
import AuthModal from "./components/AuthModal";
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
          <Route path="/chatcontainer" element={<ChatContainer />} />
  
          <Route path="/auth" element={<AuthModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
