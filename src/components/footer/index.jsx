import React, { useState, useEffect } from 'react';
import {
  LOGO_TEXT, LINKEDIN_TEXT, GITHUB_TEXT, FOOTER_DESCRIPTION, LINKEDIN, GITHUB,
} from '../../constants/index';
import logo from '../../assets/images/logo.png';
import style from './footer.module.css';
import githubSvg from '../../assets/svg/github.svg';
import linkedinSvg from '../../assets/svg/linkedin.svg';

function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <div className={style.footer}>
      <img className={style.logo} src={logo} alt={LOGO_TEXT} />
      <div className={style.socialmedia}>
        <a href={GITHUB}>
          <img src={githubSvg} alt={GITHUB_TEXT} />
        </a>
        <a href={LINKEDIN}>
          <img src={linkedinSvg} alt={LINKEDIN_TEXT} />
        </a>
      </div>
      <h4>
        ©
        {' '}
        {year}
        ,
        {' '}
        {FOOTER_DESCRIPTION}
      </h4>
    </div>
  );
}

export default Footer;
