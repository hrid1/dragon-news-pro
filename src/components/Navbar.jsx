import { Link, NavLink } from "react-router-dom";
import logo from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  //

  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);
  // console.log(logOut);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Scccessfull!");
      })
      .catch(() => {
        toast.error("Logout Failed!");
      });
  };

  return (
    <section className="flex justify-between items-center py-4 ">
      <div>{user && <h2>{user?.displayName}</h2>}</div>
      <div className="flex gap-5">
        <NavLink
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          to="career"
        >
          Career
        </NavLink>
      </div>

      <div className="flex items-center gap-4">
        <img className="w-8 h-8 rounded-full" src={logo} alt="" />

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-purple-600 text-white px-3.5 py-1.5 rounded font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="bg-purple-600 text-white px-3.5 py-1.5 rounded font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </section>
  );
};

export default Navbar;
