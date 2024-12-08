import  { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "Sneha" && password === "MajhiBayko") {
      onLoginSuccess();
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-300 to-red-400">
      <div className="p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
