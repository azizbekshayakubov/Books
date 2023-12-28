import { isAuthenticated } from "/src/store/index.js";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoutes() {
  if (isAuthenticated) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}
