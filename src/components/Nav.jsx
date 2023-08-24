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
          <div style={{ backgroundColor: '#f9f9f9' }} className={styles.mobile}>
            <span></span>
            <span className={styles.actions}>
              <CloseOutlined onClick={showMenu} />
            </span>
          </div>
          <nav className={styles.menu}>
            <div className={styles.mobileLinks}>
              <Link className={styles.pos} href='/QBs'>
                QUARTER BACKS <RightOutlined />
              </Link>
              <Link className={styles.pos} href='/RBs'>
                RUNNING BACKS <RightOutlined />
              </Link>
              <Link className={styles.pos} href='/WRs'>
                WIDE RECEIVERS <RightOutlined />
              </Link>
              <Link className={styles.pos} href='/TEs'>
                TIGHT ENDS <RightOutlined />
              </Link>
              <Divider />
              <span className={styles.accountWrapper}>
                <h4>Account</h4>
                <span className={styles.account}>
                  <Link href='/Profile' className={styles.login}>
                    Login
                  </Link>
                  <Link href='/Register' className={styles.create}>
                    Create Account
                  </Link>
                </span>
              </span>
            </div>
          </nav>
        </>
      ) : (
        <div className={styles.mobile}>
          <span>
            <Link href='/' className={styles.title}>
              <Image
                src={logo}
                alt='Fantasy Football Auxiliary'
                width={36}
                height={36}
              />
            </Link>
          </span>
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
            <span>
              <Link className={styles.title} href='/'>
                <Image
                  src={logo}
                  alt='Fantasy Football Auxiliary'
                  width={36}
                  height={36}
                />
              </Link>
            </span>
            <nav className={styles.links}>
              <Link href='/QBs'>QB</Link>
              <Link href='/RBs'>RB</Link>
              <Link href='/WRs'>WR</Link>
              <Link href='/TEs'>TE</Link>
              <Link href='/Profile'>
                <UserOutlined
                  style={{
                    lineHeight: '1',
                    verticalAlign: '0',
                    paddingTop: '5px',
                  }}
                />
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
