import { isAuthenticated } from "/src/store/index.js";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  if (!isAuthenticated) {
    return <Navigate to={"/register"} replace />;
  }
  return <Outlet />;
}
