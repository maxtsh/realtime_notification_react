import { clearFromLS, readFromLS } from "@/utils/Storage/LocalStorage";
import { useNavigate } from "react-router-dom";
import { Container } from "./Header.styles";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const username = readFromLS("notification_username");

  const logOut = () => {
    clearFromLS("notification_username");
    navigate("/login", { replace: true });
  };

  return (
    <Container>
      <h1>Header</h1>
      <h3>Welcome {username}</h3>
      <button onClick={logOut}>Logout</button>
    </Container>
  );
};

export default Header;
