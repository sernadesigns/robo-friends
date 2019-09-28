import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

function App() {
	const [ robotList, setRobotList ] = useState([]);
	const [ searchField, setSearchField ] = useState('');

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	};

	const filteredRobots = robotList.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobotList(users));
	}, []);

	return (!robotList.length) ?
		(
			<div className='tc'>
				<p>Loading...</p>
			</div>
		)
		:
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		)
}

export default App;