import { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
							<span className='nav-desktop-links'>
								<Link href='/QBs'>QB</Link>
								<Link href='/RBs'>RB</Link>
								<Link href='/WRs'>WR</Link>
								<Link href='/TEs'>TE</Link>
								<UserOutlined style={{
									justifySelf: 'end'
								}} />
							</span>
						</div>
					)}
				</div>
			</header>
		</>
	);
};

export default Nav;
