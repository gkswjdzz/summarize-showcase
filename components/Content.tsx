import Image from 'next/image';
import Share from '@/components/Share';
import styles from '@/styles/Content.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <div>
        <div>1</div>
        <div>2</div>
        <button className={styles.button}>
          <p>Summarize</p>
          <Image
            src='/icons/right-arrow.svg'
            alt='right-arrow'
            width={19}
            height={14}
          />
        </button>
      </div>
      <Share />
    </div>
  );
};

export default Content;
