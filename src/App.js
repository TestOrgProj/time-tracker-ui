
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChangePassword from "./components/pages/auth/ChangePassword";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordRestEmail";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
        
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


