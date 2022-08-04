import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { loadDataThunk } from './Redux/Data_Reducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDataThunk());
  }, []);

  const [theme, setTheme] = useState('default');

  const handleTheme = () => {
    if (theme === 'default') {
      setTheme('white');
    } else {
      setTheme('default');
    }
  };

  return (
    <>
      <Navbar theme={theme} themeSwitch={handleTheme} />
      <Home theme={theme} />
    </>
  );
}

export default App;
