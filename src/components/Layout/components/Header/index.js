import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import stules from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cs = classNames.bind(stules);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  return (
    <header className={cs('wraper')}>
      <div className={cs('inner')}>
        <div className={cs('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cs('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cs('search-title')}>Accouts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cs('search')}>
            <input placeholder="Search accouts and videos" spellCheck={false} />
            <button className={cs('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {<FontAwesomeIcon className={cs('loading')} icon={faSpinner} />}

            <button className={cs('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cs('action')}>
          <Button upload icon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
