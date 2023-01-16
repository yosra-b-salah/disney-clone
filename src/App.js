import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
