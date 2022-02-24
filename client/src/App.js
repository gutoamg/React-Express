import { useEffect, useState } from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Footer from "./components/Footer";
import axios from 'axios';

function App() {
	const [backendData, setBackendData] = useState([{}]);
	
	useEffect(() => {
		const getData = async () => {
			try {
				let result = await axios("/images");
				setBackendData([...result.data.sgsExpertise]);
			} catch (error) {
				setBackendData(null);
			}
		}
		getData();
	}, []);

	return (
		<>
			<FirstPage />
			<SecondPage backendData={backendData} />
			<Footer />
		</>
	);
}

export default App;
