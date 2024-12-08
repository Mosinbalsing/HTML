import { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "Sneha" && password === "Bayko") {
      onLoginSuccess();
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-red-400 px-4">
      <div className="p-4 md:p-6 bg-white rounded-lg shadow-xl w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h1 className="text-lg md:text-2xl font-bold text-center mb-4">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-2 md:mb-4 border rounded focus:outline-none focus:ring focus:ring-pink-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-2 md:mb-4 border rounded focus:outline-none focus:ring focus:ring-pink-300"
        />
        {error && <p className="text-red-500 text-sm mb-2 md:mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 transition-all duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
