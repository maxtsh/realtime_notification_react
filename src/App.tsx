import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login/Lazy";
import Notfound from "@/pages/Notfound";
import AllRoutes from "@/routes";
import Auth from "@/auth";
import Layout from "@/layouts/Layout";
import GlobalStyles from "@/styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          {AllRoutes.map((Page) => (
            <Route key={Page.name} element={<Auth />}>
              <Route path={Page.path} element={<Page.component />} />
            </Route>
          ))}
          {/* Catch All NotFound */}
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
