import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  console.log(error);
  const navigate = useNavigate();

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        toast.success("Login successful! ");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // console.log(error.message);
        toast.error("Error:Try again!");
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md "
            />
          </div>

          {error.login && <span className="text-xs font-semibold  text-red-500">{error.login}</span>}
         
          <button
            type="submit"
            className=" w-full py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Don&apos;t Have An Account?{" "}
          <Link to="/auth/register" className="text-red-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
