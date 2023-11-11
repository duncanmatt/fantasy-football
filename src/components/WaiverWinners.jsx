import WwCard from './wWCard';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';
import { Skeleton } from 'antd';

const fetcher = (url) => fetch(url).then((res) => res.json());

const WaiverWinners = () => {
  const { data, error, isLoading } = useSWR('/api/players/waiver', fetcher);

  if (isLoading || !data) {
    return <Skeleton />;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <div className={styles.waiverWinners}>
      {data.map((player) => (
        <WwCard key={player._id} player={player} />
      ))}
    </div>
  );
};

export default WaiverWinners;
