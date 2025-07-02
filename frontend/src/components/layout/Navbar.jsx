import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContextApi.jsx";
import { useContext } from "react";
import Button from "../ui/Button.jsx";
import { FaUserCircle } from "react-icons/fa"; // <-- user icon

const Navbar = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-between px-4 py-[0.1rem] bg-[rgba(14,14,14,0.9)] backdrop-blur-sm shadow-md z-[100] transition-colors duration-300">
      {/* Logo */}
      <Link to="/" className="text-[#ff8c00] text-2xl font-bold font-poppins">
        Symptom-Journal
      </Link>

      {/* Menu */}
      <div className="flex">
        <ul className="flex items-center m-0 p-0 list-none">
          <li className="mx-2 py-2 px-4 transition-all duration-300">
            <Link to="/">
              <Button name="Home" />
            </Link>
          </li>
          <li className="mx-2 py-2 px-4 transition-all duration-300">
            <Link to="/add-symptom">
              <Button name="Add Symptom" />
            </Link>
          </li>
          <li className="mx-2 py-2 px-4 transition-all duration-300">
            <Link to="/Symptom-Trends">
              <Button name="Symptom Trends" />
            </Link>
          </li>

          {/* Conditional Auth Button or Icon */}
          <li className="mx-2 py-2 px-4 transition-all duration-300">
            {isAuthenticated ? (
              <div className="relative group">
                <FaUserCircle
                  className="text-3xl text-cyan-400 hover:text-cyan-500 transition duration-300 cursor-pointer"
                  title="User"
                />
                {/* Dropdown (optional) */}
                <div className="absolute hidden group-hover:block right-0 mt-2 w-40 bg-white/10 backdrop-blur-lg text-white rounded-md shadow-lg py-2 z-50">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-cyan-700 transition"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 hover:bg-red-600 transition"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <Link to="/Login">
                <Button name="Login" />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
