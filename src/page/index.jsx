import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { authRoutes, protectedRoutes } from "/src/configs/routes.js";
import AuthRoutes from "../components/route/AuthRoutes";
import ProtectedRoutes from "../components/route/ProtectedRoutes";

import AppRoute from "../components/route/AppRoute";
import CheckAuth from "../components/route/CheckAuth";

export default function AllPage() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            {protectedRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <CheckAuth role={route.role}>
                    <AppRoute component={route.component} />
                  </CheckAuth>
                }
              />
            ))}
          </Route>
          <Route path="/" element={<AuthRoutes />}>
            {authRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<AppRoute component={route.component} />}
              />
            ))}
          </Route>
          <Route path="*" element={<p>Not Found</p>}></Route>
        </Routes>
      </Router>
    </>
  );
}
