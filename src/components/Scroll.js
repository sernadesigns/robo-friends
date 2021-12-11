const Scroll = ({ children }) => {
	return (
		<div style={{ overflowY: 'scroll', borderTop: '1px solid black', borderBottom: '1px solid black', height: '800px' }}>
			{children}
		</div>
	);
}

export default Scroll;