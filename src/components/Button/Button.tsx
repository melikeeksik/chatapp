import React, { FC } from 'react';
import { ButtonProps } from './Button.constant';
import { StyledButton } from './Button.styles';

const Button: FC<ButtonProps> = (props) => {
  const { label, variation, size, onClick, ...args } = props;
  return (
    <StyledButton variation={variation} size={size} onClick={onClick} {...args}>
      {label}
    </StyledButton>
  );
};

export default Button;
