import Image from 'next/image';

interface ButtonSmallProps {
  text: string;
  src: any;
}

const ButtonSmall = ({ text, src }: ButtonSmallProps) => {
  return (
    <button>
      <Image src={src} />
      {text}
    </button>
  );
};

export default ButtonSmall;
