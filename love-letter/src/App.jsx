import { useState } from "react";
import Login from "./Components/Login";
import LoveLetterPage from "./Components/LoveLetterPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <LoveLetterPage />
      ) : (
        <Login onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
};

export default App;
