import React from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import User from "../User/User";

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <User />
  else if (login === false) return <Navigate to="/login" />
  else return null
};

export default ProtectedRoute
