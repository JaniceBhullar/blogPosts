import { Link } from "react-router-dom";
import { DataContext } from "./context/DataContext";
import { useContext } from "react";

export default function Nav() {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/post"> New Post </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </form>
    </nav>
  );
}
