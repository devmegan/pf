import { Outlet } from "react-router-dom";
import NavItem from "./component/layout/NavItem";

export default function Layout() {
  return (
    <>
      <nav className="my-6">
        <ul className="flex justify-between">
          <NavItem to="/">Feed</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/weeks">Weeks</NavItem>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};