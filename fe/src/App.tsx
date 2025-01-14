import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [hello] = useState(import.meta.env.VITE_HELLO);
  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const data = await response.json();
      console.log(data);
    };
    callApi();
  });
  return (
    <>
      <h4>{hello}</h4>
    </>
  );
}

export default App;
