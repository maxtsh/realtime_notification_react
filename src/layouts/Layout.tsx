import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Container } from "./layout.styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <main id="main-body">
        <Header />
        <div id="main-body__content" className="scr-track">
          <Outlet />
        </div>
      </main>
    </Container>
  );
};

export default Layout;
