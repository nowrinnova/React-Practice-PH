import { NavLink } from "react-router-dom";
import './Header.css'
export default function Header() {
  return (
    <div>
      <nav>
        <ul className="flex justify-end items-center gap-3 text-2xl font-bold py-5">
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contract">Contract</NavLink>
          <NavLink to="/users">Users</NavLink>
        </ul>
      </nav>
    </div>
  );
}
