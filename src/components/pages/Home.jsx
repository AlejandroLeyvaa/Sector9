import React, { useEffect } from 'react';
import Header from '../Molecules/Header';
import Logo from '../Atoms/Logo';
import Cart from '../Atoms/Cart';
import Menu from '../Atoms/MenuIcon';
import Categories from '../Molecules/Categories';
import Text from '../Molecules/Text.jsx';

import rayCollins from '../../assets/svg/Img/Decks/Classix/RAY-COLLINS-MERCHANT-DECK.svg';
import trucks from '../../assets/svg/Img/Trucks/SidewinderII/9.0_ GULLWING SIDEWINDER II SILVER SINGLE TRUCK.svg';
import wheels from '../../assets/svg/Img/Wheels/Raceformula/70MM 75A RACE FORMULA WHEELS WHITE.svg';

const Home = () => {
  const text = `Arma la patineta que siempre has soñado, personaliza eligiendo cada
          una de sus partes y pasea por la vida en tu sector 9.`;
  useEffect(() => {
    document.body.style.position = 'static';
  }, []);

  return (
    <>
      <Header cls="Header">
        <div className="Header-logo">
          <Logo />
        </div>
        <div className="Header-icons">
          <Cart cls="icon-cart" />
          <Menu cls="icon-menu" />
        </div>
      </Header>
      <main className="Main">
        <Text
        title='Home'
        text={text} />
        <Categories
          title="Tablas"
          cls="Categories-products-image Product-table"
          image={rayCollins}
        />
        <Categories
          title="Bases"
          cls="Categories-products-image"
          image={trucks}
        />
        <Categories
          title="Llantas"
          cls="Categories-products-image Product-wheel"
          image={wheels}
        />
      </main>
    </>
  );
};

export default Home;
