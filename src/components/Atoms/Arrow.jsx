import React from 'react';
import arrow from '../../assets/svg/Icon/Arrow.svg';
const Arrow = ({cls, fun}) => (
  <figure
    className={cls}
  >
    <img
    src={arrow}
    alt="arrow-sector-9"
      onClick={fun}
    />
  </figure>
);

export default Arrow;
