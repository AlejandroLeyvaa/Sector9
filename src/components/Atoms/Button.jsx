import React from 'react';

const Button = ({ cls, title }) => {
  return (
    <div className={cls}>
      <button className="Button">{title}</button>
    </div>
  );
};

export default Button;
