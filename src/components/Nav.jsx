import { useState } from 'react';

import Link from 'next/link';
import { Divider } from 'antd';
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
		<div className={styles.mobileWrapper}>
			{menuOpen ? (
				<>
					<div className={styles.mobile}>
						<Link href='/'>
							<h1>Football</h1>
						</Link>
						<span className={styles.actions}>
							<Link
								href='/Login'
								className={styles.login}></Link>
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
				</>
			) : (
				<div className={styles.mobile}>
					<Link href='/'>
						<h1>Football</h1>
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
		</div>
	);
}

const Nav = () => {
	return (
		<>
			<header className='header-wrapper'>
				<div className='header-content'>
					<MobileNav />
					<div className={styles.desktop}>
						<h1>
							<Link
								className={styles.title}
								href='/'>
								Football
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
				</div>
			</header>
		</>
	);
};

export default Nav;
