import { clearFromLS, readFromLS } from "@/utils/Storage/LocalStorage";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const username = readFromLS("notification_username");

  const logOut = () => {
    clearFromLS("notification_username");
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h1>Welcome {username}</h1>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Home;
