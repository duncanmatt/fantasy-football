import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { MenuOutlined } from '@ant-design/icons';


const Nav = () => {
	const isMobile = useMediaQuery({
		query: '(max-width: 600px)',
	});

	return (
		<>
			<header className='header-wrapper'>
				<div className='header-content'>
					{isMobile ? (
						<div className='nav-mobile'>
							<h1>Fantasy Football</h1>
							<MenuOutlined />
						</div>
					) : (
						<div className='nav-desktop'>
							<h1>Fantasy Football</h1>
							<span className='nav-desktop-positions'>
								{/* <Link>QB</Link>
								<Link>RB</Link>
								<Link>WR</Link>
								<Link>TE</Link> */}
							</span>
						</div>
					)}
				</div>
			</header>
		</>
	);
};

export default Nav;
