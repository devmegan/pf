import { useMatch, Link } from "react-router-dom/dist";

export default function NavItem({ to, children }) {
  const isActive = useMatch(to);
  const className = isActive ? "nav-active" : "";
  
  return (
    <li>
      <Link to={to} className={className}>{children}</Link>
    </li>
  );
}
