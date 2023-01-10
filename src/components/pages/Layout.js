import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Topbar from "../Topbar";
const Layout = () => {
  return <>
    <CssBaseline />
    <Topbar></Topbar>
    <Outlet />
  </>;
};

export default Layout;
