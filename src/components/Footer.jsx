import logo from '../../public/logo.svg';
import { Divider } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer'>
      <Divider style={{ backgroundColor: '#000' }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBlockStart: '1rem',
        }}
      >
        &copy; 2023, Fantasy Football Auxiliary
      </div>
      <div>
        <p>
          stats compiled from{' '}
          <Link
            href='https://www.fantasypros.com'
            style={{ textDecoration: 'underline' }}
          >
            Fantasy Pros
          </Link>{' '}
          and{' '}
          <Link style={{ textDecoration: 'underline' }} href='https://nfl.com'>
            NFL
          </Link>
        </p>
      </div>
      <Image src={logo} alt='Offseason Advisor' width={30} height={30} />
    </div>
  );
};

export default Footer;
