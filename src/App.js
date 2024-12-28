import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Some Sort Of Action

    console.log("The count is: ", count);

    // (Optional) Cleanup

    return () => {
      console.log("Clean up");
    };
  }, [count]); // The Dependency Array

  return (
    <div className="App">
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
