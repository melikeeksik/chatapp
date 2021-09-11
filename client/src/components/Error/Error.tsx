import React, { FC } from 'react';
import Image from '../Image';
import { ICONS } from '../Image/Image.constants';
import { ErrorProps } from './Error.constants';
import { StyledOuterContainer, StyledText } from './Error.styles';

const Error: FC<ErrorProps> = (props) => {
  const { text } = props;
  return (
    <StyledOuterContainer>
      <Image src={ICONS.error}  width="15" height="15"/>
      <StyledText>{text}</StyledText>
    </StyledOuterContainer>
  );
};

export default Error;
