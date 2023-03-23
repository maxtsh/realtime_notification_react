import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { clearFromLS, readFromLS } from "@/utils/Storage/LocalStorage";
import useSocket from "@/hooks/useSocket";
import { Container } from "./Header.styles";

const Header: React.FC = () => {
  const [notifs, setNotifs] = useState(0);
  const { socket } = useSocket();
  const navigate = useNavigate();
  const username = readFromLS("notification_username");

  const logOut = () => {
    clearFromLS("notification_username");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const handleNotification = ({ message }: { message: string }) => {
      setNotifs((prev) => prev + 1);
      console.log(message);
    };
    socket?.on("notification", handleNotification);

    // Event must be cleaned with its corresponding function
    // If function is not passed then it may remove all the notification subs from other components too
    return () => {
      socket?.off("notification", handleNotification);
    };
  }, []);

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
