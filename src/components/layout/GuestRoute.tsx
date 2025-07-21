import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
