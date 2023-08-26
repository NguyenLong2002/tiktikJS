import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cs = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  upload = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  Icon,
  onClick,
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
    [className]: className,
    primary,
    upload,
    outline,
    disabled,
    rounded,
    small,
    large,
  });
  return (
    <Comp className={classes} {...props}>
      {Icon && <span className={cs('icon')}>{Icon}</span>}
      <span className={cs('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
