import React from 'react';
// import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {

const token = useSelector((state) => state.token);

console.log(token)

//   const token = useSelector(state => state.token)

  return token ? children : <Navigate to="/panel" />;

};
export default PrivateRoute;