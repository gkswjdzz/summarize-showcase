import ButtonSmall from '@/components/button/ButtonSmall';
import ButtonMedium from '@/components/button/ButtonMedium';
import ButtonLarge from '@/components/button/ButtonLarge';

interface ButtonProps {
  type: string;
  text: string;
  src: any;
}

const Button = ({ type, text, src }: ButtonProps) => {
  switch (type) {
    case 'small':
      return <ButtonSmall text={text} src={src} />;
    case 'medium':
      return <ButtonMedium text={text} src={src} />;
    case 'large':
    default:
      return <ButtonLarge text={text} src={src} />;
  }
};

export default Button;
