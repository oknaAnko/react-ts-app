import classNames from 'classnames';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FunctionComponent } from "react";

interface CommonProps {
  variant: 'primary' | 'secondary';
}

interface ButtonElementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  element?: 'button';
}

interface LinkElementProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  element: 'link';
  disabled?: boolean;
}

type ButtonProps = CommonProps & (ButtonElementProps | LinkElementProps);

const Button: FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  children,
  className: externalClassName = '',
  ...elementProps
}) => {

  const className = classNames('button', [variant], externalClassName);

  return elementProps.element === 'link' ? (
    <a className={className} {...elementProps}>
      {children}
    </a>
  ) : (
    <button className={className} type='button' {...elementProps}>
      {children}
    </button>
  );
};

export default Button;