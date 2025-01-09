import { useState } from "react";
import "./App.css";
function App() {
  const [hello] = useState(import.meta.env.APP_HELLO);
  return (
    <>
      <h4>{hello}</h4>
    </>
  );
}

export default App;
