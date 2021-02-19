import React from 'react';

const Header = ({ children, cls }) => {
  return (
    <header className={cls}>
      {children}
    </header>
   );
}

export default Header;