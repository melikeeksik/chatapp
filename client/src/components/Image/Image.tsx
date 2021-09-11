import React, { FC } from 'react';
import { ImageProps } from './Image.constants';
import { StyledImage } from './Image.styles';

const Image: FC<ImageProps> = (props) => {
  return <StyledImage {...props} />;
};

export default Image;
