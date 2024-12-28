import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { initialItems } from "./_utils";

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <h2>selected Item: {selectedItem?.id}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
