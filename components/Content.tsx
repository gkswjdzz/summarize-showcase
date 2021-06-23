import Image from 'next/image';
import Share from '@/components/Share';
import styles from '@/styles/Content.module.scss';
import Editor from '@/components/Editor';

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentContainer}>
        <div className={styles.editors}>
          <Editor />
          <Editor readOnly />
        </div>
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
