import React from 'react';

function Card({ name, username, email }) {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${username}?size=200x200`} alt='robot' />
			<div className="tc">
				<h2 className="mb2">{name}</h2>
				<p className="ma1">{email}</p>
			</div>
		</div>
	);
}

export default Card;