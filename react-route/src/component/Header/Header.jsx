import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav>
        <ul className="flex justify-end items-center gap-3 text-2xl font-bold py-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contract">Contract</Link>
          <Link to="/users">Users</Link>
        </ul>
      </nav>
    </div>
  );
}
