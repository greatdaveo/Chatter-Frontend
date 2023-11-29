import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth") || false);

  return (
    <div>
      <>{isAuth ? children : <Navigate to="/" />}</>
    </div>
  );
};

export default ProtectedRoutes;
