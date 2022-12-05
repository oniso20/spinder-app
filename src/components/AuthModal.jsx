import React from "react";
import "../styles/auth.css";
import Dashboard from "../pages/Dashboard";
import Auth from "../components/Auth";
import { useUserContext } from "../context/UserContext";

const AuthModal = () => {
  const { user, loading, error } = useUserContext();
  return (
    <div className="auth-container">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
};

export default AuthModal;
