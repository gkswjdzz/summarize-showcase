import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from '@/styles/Header.module.scss';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('header')}>
      <div className={cx('logoAndTitles')}>
        <Image src='/icons/logo.svg' alt='logo' width={57} height={57} />
        <div className={cx('titles')}>
          <h1 className={cx('title')}>Summar Summar</h1>
          <p className={cx('subtitle')}>
            a smart machine that summarizes your thoughts.
          </p>
        </div>
      </div>

      <div className={cx('links')}>
        <Button type='medium' text='GitHub' src='/icons/github-white.svg' />
        <Button
          type='medium'
          text='Testing API'
          src='/icons/ainize-white.svg'
        />
      </div>
    </div>
  );
};

export default Header;
