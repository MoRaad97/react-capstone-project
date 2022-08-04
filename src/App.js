import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { useDispatch } from "react-redux/es/exports";
import { loadDataThunk } from "./Redux/mainReducer";


function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadDataThunk());
	}, []);

	const [theme, setTheme] = useState('default')

	const handleTheme = () => {
		theme === 'default' ? setTheme('white') : setTheme('default')
	}

	return (
		<>
			<Navbar theme={theme} themeSwitch={handleTheme} />
			<Home theme={theme} />
		</>
	);
}

export default App;
