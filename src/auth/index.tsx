import { Outlet, useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const navigate = useNavigate();

  return <Outlet />;
};

export default Auth;
