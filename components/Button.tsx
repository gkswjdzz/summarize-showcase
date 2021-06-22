import ButtonSmall from '@/components/button/ButtonSmall';
import ButtonMedium from '@/components/button/ButtonMedium';
import ButtonLarge from '@/components/button/ButtonLarge';

interface ButtonProps {
  type: string;
  src: any;
  text?: string;
  background?: string;
}

const Button = ({ type, src, text = '', background = '' }: ButtonProps) => {
  switch (type) {
    case 'small':
      return <ButtonSmall src={src} background={background} />;
    case 'medium':
      return <ButtonMedium text={text} src={src} />;
    case 'large':
    default:
      return <ButtonLarge text={text} src={src} />;
  }
};

export default Button;
