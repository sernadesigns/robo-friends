import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

function App(props) {
	const [ robotList, setRobotList ] = useState([]);
	const { searchField, onSearchChange } = props;

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
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);