import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
	// Example of how to fetch one card
	useEffect(() => {
		fetch('/card', { method: 'GET' })
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				// handle payload
				console.log(data);
			})
			.catch((err) => {
				// handle errors
				console.log(err);
			});
	});
	// Example of how to fetch many cards
	useEffect(() => {
		fetch('/cards', { method: 'GET' })
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				// handle payload
				console.log(data);
			})
			.catch((err) => {
				// handle errors
				console.log(err);
			});
	});
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
