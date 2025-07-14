import react from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Mode from "./components/Mode/Mode";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (<>
  
  <Mode />
  </>
  );
}

export default App;
