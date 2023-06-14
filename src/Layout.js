import { Outlet } from "react-router-dom";
import NavItem from "./component/layout/NavItem";

export default function Layout() {
  return (
    <>
      <nav className="mt-6 mb-10">
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