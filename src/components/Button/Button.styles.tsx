import styled from 'styled-components';

import {
  ButtonColors,
  ButtonSizies,
  ButtonStyleProps,
} from './Button.constant';

export const StyledButton = styled.button<ButtonStyleProps>`
  background-color: ${({ variation = 'primary' }) => ButtonColors[variation]};
  border-radius: 6px;
  font-size: 20px;
  line-height: 48px;
  padding: 0 16px;
  width: ${({ size = 'small' }) => ButtonSizies[size].width};
  height: ${({ size = 'small' }) => ButtonSizies[size].height};

  cursor: pointer;
  display: inline-block;
  justify-content: center;
  font-weight: bold;
`;
