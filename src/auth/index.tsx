import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useSocket from "@/hooks/useSocket";
import { readFromLS } from "@/utils/Storage/LocalStorage";

const Auth: React.FC = () => {
  const { socket } = useSocket();
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // This is simplified auth request to validate user on each behind-authentication pages
    // Ex: React Query Results
    const username = readFromLS("notification_username");
    // Set the auth user and token data inside your app's global state or memory ex: redux, context, zustand etc.
    setData(username);

    // Successfull Login => connect and add the new user to the socket server
    if (username) {
      socket.connect();
      socket?.emit("NewUser", username);
    }

    // Auth process is done, loading = false
    setLoading(false);

    // On auth unmount meaning the user is going outside of authed pages so we disconnect from the socket
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  // Wait for auth request to be resolved!
  if (loading) return null;
  // Navigate to login if authentication fails (Or user is not allowed with its role)
  if (!data) return <Navigate to="/login" replace />;
  // Show the page
  return <Outlet />;
};

export default Auth;
