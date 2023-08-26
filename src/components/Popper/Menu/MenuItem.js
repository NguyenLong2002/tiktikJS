import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cs = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  return (
    <Button className={cs('menu-item')} Icon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
