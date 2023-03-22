import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Container } from "./layout.styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <main id="main">
        <Sidebar />
        <div id="main__content">
          <Outlet />
        </div>
        <Profile />
      </main>
    </Container>
  );
};

export default Layout;
