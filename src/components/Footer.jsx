import logo from '../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div
      className='footer'
      style={{ paddingBlockStart: '2rem', borderTop: '1px solid #b1b4b6' }}
    >
      <div>
        <p>
          stats compiled from{' '}
          <Link
            href='https://www.fantasypros.com'
            style={{ fontWeight: '600' }}
          >
            Fantasy Pros
          </Link>{' '}
          and{' '}
          <Link style={{ fontWeight: '600' }} href='https://nfl.com'>
            NFL
          </Link>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>&copy; 2023, Fantasy Football Auxiliary</span>{' '}
        <Image src={logo} alt='Offseason Advisor' width={18} height={18} />
      </div>
    </div>
  );
};

export default Footer;
