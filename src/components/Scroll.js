import React from 'react';

function Scroll(props) {
	return (
		<div style={{ overflowY: 'scroll', borderTop: '1px solid black', borderBottom: '1px solid black', height: '800px' }}>
			{props.children}
		</div>
	);
}

export default Scroll;