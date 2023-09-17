import { MouseEventHandler } from 'react';
import * as Styled from './Button.styled.ts';

export type Props = {
  variant: 'primary' | 'secondary';
  text?: string;
  $handleClick: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  $icon?: string;
  $iconPosition?: 'left' | 'right' | 'onlyIcon';
  $borderRadius?: 'sm' | 'md' | 'lg' | 'full';
  isDisabled?: boolean;
};

export function Button(props: Props) {
  const showIcon = props.$icon && props.$iconPosition !== undefined;
  const showText = props.text && props.$iconPosition !== 'onlyIcon';

  return (
    <Styled.Button
      type={props.type || 'button'}
      onClick={props.$handleClick}
      isDisabled={props.isDisabled || false}
      {...props}
    >
      {showIcon && <img className="icon" src={props.$icon} alt="icon" />}
      {showText && <span className="text">{props.text}</span>}
    </Styled.Button>
  );
}
