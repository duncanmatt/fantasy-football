import { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import {
	MenuOutlined,
	UserOutlined,
	CloseOutlined,
	RightOutlined,
} from '@ant-design/icons';

function MobileNav() {
	const [menuOpen, setMenuOpen] = useState(false);

	const showMenu = () => setMenuOpen(!menuOpen);

	return (
		<>
			{menuOpen ? (
				<div className='menu-wrapper'>
					<div className='menu-content'>
						<div className='nav-mobile'>
							<h1>Fantasy Football</h1>
							<CloseOutlined onClick={showMenu} />
						</div>
						<div className='menu-lower'>
							<h2>Positions</h2>
							<span className='mobile-menu-links'>
								<Link href='/QBs'>
									QB <RightOutlined />
								</Link>
								<Link href='/RBs'>
									RB <RightOutlined />
								</Link>
								<Link href='/WRs'>
									WR <RightOutlined />
								</Link>
								<Link href='/TEs'>
									TE <RightOutlined />
								</Link>
							</span>
						</div>
					</div>
				</div>
			) : (
				<div className='nav-mobile'>
					<Link href='/'>
						<h1>Fantasy Football</h1>
					</Link>
					<MenuOutlined onClick={showMenu} />
				</div>
			)}
		</>
	);
}

const Nav = () => {
	const isMobile = useMediaQuery({
		query: '(max-width: 600px)',
	});

	return (
		<>
			<header className='header-wrapper'>
				<div className='header-content'>
					{isMobile ? (
						<MobileNav />
					) : (
						<div className='nav-desktop'>
							<Link href='/'>
								<h1>Fantasy Football</h1>
							</Link>
							<span className='nav-desktop-links'>
								<Link href='/QBs'>QB</Link>
								<Link href='/RBs'>RB</Link>
								<Link href='/WRs'>WR</Link>
								<Link href='/TEs'>TE</Link>
								<Link href='/Login'>
									<UserOutlined />
								</Link>
							</span>
						</div>
					)}
				</div>
			</header>
		</>
	);
};

export default Nav;
