import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { readFromLS } from "@/utils/Storage/LocalStorage";

const Auth: React.FC = () => {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setData(readFromLS("notification_username"));
    setLoading(false);
  }, []);

  if (loading) return null;
  if (!data) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default Auth;
