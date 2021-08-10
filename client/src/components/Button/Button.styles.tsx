import styled from 'styled-components';

import { ButtonColors, ButtonSizes, ButtonStyleProps } from './Button.constant';

export const StyledButton = styled.button<ButtonStyleProps>`
  background-color: ${({ variation = 'primary' }) => ButtonColors[variation]};
  border-radius: 6px;
  font-size: 20px;
  line-height: 48px;
  padding: 0 16px;
  width: ${({ size = 'small' }) => ButtonSizes[size].width};
  height: ${({ size = 'small' }) => ButtonSizes[size].height};

  cursor: pointer;
  display: inline-block;
  justify-content: center;
  font-weight: bold;
`;
