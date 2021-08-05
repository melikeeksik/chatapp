import React, { FC } from 'react';
import { ButtonProps } from './Button.constant';
import { StyledButton } from './Button.styles';

const Button: FC<ButtonProps> = (props) => {
  const { label, variation, size, onClick,name,type,...args } = props;
  return (
    <StyledButton type={type} name={name} variation={variation} size={size} onClick={onClick} {...args}>
      {label}
    </StyledButton>
  );
};

export default Button;
