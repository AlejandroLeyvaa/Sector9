import React from 'react';

import logo from '../../assets/svg/Logo/Sector9-White.svg';

const Logo = ({cls}) => (
  <figure className={cls}>
    <img src={logo} alt="logo-sector-9" />
  </figure>
);

export default Logo;
