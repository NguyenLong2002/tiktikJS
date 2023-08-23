import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cs = classNames.bind(styles);
function AccoutsItem() {
  return (
    <div className={cs('wrapper')}>
      <img
        className={cs('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/752ec060f4b599ac5bfeeec8b4b5ee23~c5_100x100.jpeg?x-expires=1692867600&x-signature=W5lglHIh%2B8eTmijIXBJzy0sswKw%3D"
        alt="Hoaa"
      />
      <div className={cs('info')}>
        <p className={cs('name')}>
          <span>Nguyen Thanh Long</span>
          <FontAwesomeIcon className={cs('check')} icon={faCheckCircle} />
        </p>
        <span className={cs('username')}>nguyenthanhlong</span>
      </div>
    </div>
  );
}

export default AccoutsItem;
