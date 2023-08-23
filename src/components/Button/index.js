import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cs = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  rounded = false,
  small = false,
  large = false,
  upload = false,
  disabled = false,
  icon,
  onClick,
  children,
  ...passProps
}) {
  const props = {
    onClick,
    ...passProps,
  };
  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  let Comp = 'button';
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cs('wrapper', {
    primary,
    outline,
    small,
    large,
    upload,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {icon && <span className={cs('icon')}>{icon}</span>}
      <span className={cs('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
