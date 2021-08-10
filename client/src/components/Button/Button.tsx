import React, { FC } from 'react';
import { ButtonProps } from './Button.constant';
import { StyledButton } from './Button.styles';

const Button: FC<ButtonProps> = ({
  label,
  variation,
  size,
  onClick,
  name,
  type,
}) => {
  return (
    <StyledButton
      type={type}
      name={name}
      variation={variation}
      size={size}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
