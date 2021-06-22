import Image, { ImageProps } from 'next/image';

interface ButtonLargeProps {
  text: string;
  src: any;
}

const ButtonLarge = ({ text, src }: ButtonLargeProps) => {
  return (
    <button>
      <Image src={src} />
      {text}
    </button>
  );
};

export default ButtonLarge;
