import Image from 'next/image';

import styles from '@/styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.link}>
        <Image src='/icons/ainize.svg' alt='ainize' width={14} height={14} />
        <p>Powered by Ainize</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/github.svg' alt='github' width={17} height={17} />
        <p>Contribute on GitHub</p>
      </div>
    </div>
  );
};

export default Footer;
