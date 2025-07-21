import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuestRoute from "./components/layout/GuestRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    element: <GuestRoute />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
