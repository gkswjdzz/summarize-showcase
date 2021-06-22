import Image from 'next/image';
import styles from '@/styles/buttons/ButtonMedium.module.scss';

interface ButtonMediumProps {
  text: string;
  src: any;
}

const ButtonMedium = ({ text, src = undefined }: ButtonMediumProps) => {
  return (
    <button className={styles.button}>
      {src ? <Image src={src} width={16} height={16} /> : null}
      <div className={styles.text}>{text}</div>
    </button>
  );
};

export default ButtonMedium;
