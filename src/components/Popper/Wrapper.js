import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
const cs = classNames.bind(styles);
function wraper({ children }) {
  return <div className={cs('wrapper')}>{children}</div>;
}

export default wraper;
