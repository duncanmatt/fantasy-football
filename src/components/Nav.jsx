import Link from 'next/link';
import { Divider } from 'antd';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg';
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
							<Image
								src={logo}
								alt='Offseason Adviser'
								width={35}
								height={35}
							/>
						</Link>
						<span className={styles.actions}>
							<CloseOutlined onClick={showMenu} />
						</span>
					</div>
					<nav className={styles.menu}>
						<div className={styles.mobileLinks}>
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
							<span className={styles.user}>
								<Link
									href='/Profile'
									className={styles.login}>
									Login
								</Link>
								<Link
									href='/Register'
									className={styles.create}>
									Create Account
								</Link>
							</span>
						</div>
					</nav>
				</>
			) : (
				<div className={styles.mobile}>
					<Link href='/'>
						<Image
							src={logo}
							alt='Offseason Adviser'
							width={35}
							height={35}
						/>
					</Link>
					<span className={styles.actions}>
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
						<Link
							className={styles.title}
							href='/'>
							<Image
								src={logo}
								alt='Offseason Adviser'
								width={40}
								height={40}
							/>
						</Link>
						<nav className={styles.links}>
							<Link href='/QBs'>QB</Link>
							<Link href='/RBs'>RB</Link>
							<Link href='/WRs'>WR</Link>
							<Link href='/TEs'>TE</Link>
							<Link href='/Profile'>
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
