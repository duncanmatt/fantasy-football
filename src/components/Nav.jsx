import { useState } from 'react';

import Link from 'next/link';
import { Divider } from 'antd';
import { useMediaQuery } from 'react-responsive';
import {
	MenuOutlined,
	UserOutlined,
	CloseOutlined,
	RightOutlined,
} from '@ant-design/icons';
import styles from '../styles/Nav.module.css';

function MobileNav() {
	const [menuOpen, setMenuOpen] = useState(false);

	const showMenu = () => setMenuOpen(!menuOpen);

	return (
		<>
			{menuOpen ? (
				<div className='menu-wrapper'>
					<div className='menu-content'>
						<div className={styles.mobile}>
							<h1>Fantasy Football</h1>
							<span className={styles.actions}>
								<Link
									href='/Login'
									className={styles.login}>
									<UserOutlined />
								</Link>
								<CloseOutlined onClick={showMenu} />
							</span>
						</div>
						<nav className={styles.menu}>
							<span className={styles.mobileLinks}>
								<Link href='/QBs'>
									QUARTER BACKS <RightOutlined />
								</Link>
								<Divider />
								<Link href='/RBs'>
									RUNNING BACKS <RightOutlined />
								</Link>
								<Divider />
								<Link href='/WRs'>
									WIDE RECEIVERS <RightOutlined />
								</Link>
								<Divider />
								<Link href='/TEs'>
									TIGHT ENDS <RightOutlined />
								</Link>
								<Divider />
							</span>
						</nav>
					</div>
				</div>
			) : (
				<div className={styles.mobile}>
					<Link href='/'>
						<h1>Fantasy Football</h1>
					</Link>
					<span className={styles.actions}>
						<Link
							href='/Login'
							className={styles.login}>
							<UserOutlined />
						</Link>
						<MenuOutlined onClick={showMenu} />
					</span>
				</div>
			)}
		</>
	);
}

const Nav = () => {
	const isMobile = useMediaQuery({
		query: '(max-width: 800px)',
	});

	return (
		<>
			<header className='header-wrapper'>
				<div className='header-content'>
					{isMobile ? (
						<MobileNav />
					) : (
						<div className={styles.desktop}>
							<h1>
								<Link
									className={styles.title}
									href='/'>
									Fantasy Football
								</Link>
							</h1>
							<nav className={styles.links}>
								<Link href='/QBs'>QB</Link>
								<Link href='/RBs'>RB</Link>
								<Link href='/WRs'>WR</Link>
								<Link href='/TEs'>TE</Link>
								<Link href='/Login'>
									<UserOutlined />
								</Link>
							</nav>
						</div>
					)}
				</div>
			</header>
		</>
	);
};

export default Nav;
