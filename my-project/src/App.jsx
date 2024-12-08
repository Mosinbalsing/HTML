import{ useState } from "react";
import Login from "./Components/Login";
import LoveLetter from "./Components/LoveLetterPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <LoveLetter />
      ) : (
        <Login onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
};

export default App;
