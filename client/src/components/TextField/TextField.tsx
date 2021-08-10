import React, { FC } from 'react';
import { TextFieldProps } from './TextField.constant';
import { StyledTextField } from './TextField.styles';

const TextField: FC<TextFieldProps> = ({ placeHolder, onChange, name }) => {
  return (
    <StyledTextField
      placeholder={placeHolder}
      onChange={onChange}
      name={name}
    ></StyledTextField>
  );
};

export default TextField;
