import styles from '@/styles/Share.module.scss';
import Button from '@/components/Button';

const Share = () => {
  return (
    <div className={styles.share}>
      <h2>Share Summar Summar</h2>
      <div className={styles.buttons}>
        <Button type='small' src='/icons/share.svg' background={'#9190AE'} />
        <Button type='small' src='/icons/facebook.svg' background={'#0076FC'} />
        <Button type='small' src='/icons/twitter.svg' background={'#1BB7EB'} />
      </div>
    </div>
  );
};

export default Share;
