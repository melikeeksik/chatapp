export interface ButtonStyleProps {
  variation: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export interface ButtonProps extends ButtonStyleProps {
  label?: string;
  onClick?: () => void;
  name?:string;
  type?:"button" | "submit" | "reset" 
}

export const ButtonColors = {
  primary: '#1877f2',
  secondary: '#69a74e',
};

export const ButtonSizies = {
  small: {
    width: '95px',
    height: '38px',
  },
  medium: {
    width: '113px',
    height: '48px',
  },
  large: {
    width: '100%',
    height: '48px',
  },
};
