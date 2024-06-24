import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Navbar count={count} incrementar={incrementar} decrementar={decrementar} />
      <Content count={count} />
      <Footer />
    </>
  );
}

export default App;
