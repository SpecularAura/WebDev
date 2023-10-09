import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [myData, setMyData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/hello')
    .then(response => response.json())
    .then(data => setMyData(data))
  }, [])

  function handleClick() {
    setCount((prevCount) => {
      return prevCount + 1
    })
  }
  return (
    <div>
      {myData && myData.msg}
      <p>{count}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
