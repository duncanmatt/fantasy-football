import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className='page-container'>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
