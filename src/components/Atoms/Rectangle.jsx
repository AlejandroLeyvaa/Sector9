import React from 'react';

const Rectangle = ({children, cls}) => {
  return (
    <div className={cls}>
      {children}
    </div>
   );
};

export default Rectangle;