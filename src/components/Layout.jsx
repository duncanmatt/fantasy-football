import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className='page-container'>{children}</div>
		</>
	);
};

export default Layout;
