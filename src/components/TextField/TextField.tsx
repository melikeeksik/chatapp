import React, { FC } from 'react';
import { TextFieldProps } from './TextField.constant';
import { StyledTextField } from './TextField.styles';

const TextField: FC<TextFieldProps> = (props) => {
  const { placeHolder, onChange,name, ...args } = props;
  return (
    <StyledTextField
      placeholder={placeHolder}
      onChange={onChange}
      name={name}
      {...args}
    ></StyledTextField>
  );
};

export default TextField;
