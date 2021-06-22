import Image from 'next/image';
import classNames from 'classnames/bind';

import styles from '@/styles/buttons/ButtonSmall.module.scss';

const cx = classNames.bind(styles);
interface ButtonSmallProps {
  src: any;
  background: string;
}

const ButtonSmall = ({ src, background }: ButtonSmallProps) => {
  return (
    <button className={cx('button')}>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.03125 27.9688C-1.34375 22.5938 -1.34375 9.40624 4.03125 4.03125C9.40624 -1.34375 22.5938 -1.34375 27.9688 4.03125C33.3438 9.40624 33.3438 22.5938 27.9688 27.9688C22.5938 33.3438 9.40624 33.3438 4.03125 27.9688Z'
          fill={background}
        />
      </svg>
      <Image
        src={src}
        alt={src}
        layout='fill'
        objectPosition={'center'}
        objectFit={'scale-down'}
      />
    </button>
  );
};

export default ButtonSmall;
