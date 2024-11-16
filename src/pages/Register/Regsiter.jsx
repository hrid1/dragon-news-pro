import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserInfo } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("username");
    const photo = form.get("photo");
    // console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserInfo(name, photo)
          .then(() => toast.success(`Welcome, ${name}`))
          .catch((err) => console.log(err.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username "
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url "
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md "
            />
          </div>
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
          <button
            type="submit"
            className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Already Have An Account?{" "}
          <Link to="/auth/login" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
