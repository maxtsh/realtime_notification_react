import { useEffect, useState } from "react";
import { BsBell } from "react-icons/bs";
import { clearFromLS, readFromLS } from "@/utils/Storage/LocalStorage";
import { useNavigate } from "react-router-dom";
import { Container } from "./Header.styles";
import useSocket from "@/hooks/useSocket";

const Header: React.FC = () => {
  const [notifs, setNotifs] = useState(0);
  const socket = useSocket();
  const navigate = useNavigate();
  const username = readFromLS("notification_username");

  const logOut = () => {
    clearFromLS("notification_username");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    socket?.emit("NewUser", username);
  }, [socket, username]);

  useEffect(() => {
    socket?.on("notification", ({ message }) => {
      setNotifs((prev) => prev + 1);
      console.log(message);
    });
  }, [socket]);

  return (
    <Container>
      <div className="left">
        <h1>Notification</h1>
      </div>
      <div className="middle">
        <h3>Welcome {username}</h3>
      </div>
      <div className="right">
        <BsBell size={20} />
        {Boolean(notifs) && <span>{notifs}</span>}
        <button onClick={logOut}>Logout</button>
      </div>
    </Container>
  );
};

export default Header;
