import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [hello] = useState(import.meta.env.VITE_HELLO);
  useEffect(() => {
    console.log(import.meta.env);
  });
  return (
    <>
      <h4>{hello}</h4>
    </>
  );
}

export default App;
