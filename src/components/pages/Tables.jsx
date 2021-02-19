import React, { useEffect } from 'react';
import Header from '../Molecules/Header';
import Text from '../Molecules/Text';
import Logo from '../Atoms/Logo';
import Cart from '../Atoms/Cart';
import Menu from '../Atoms/MenuIcon';
import Product from '../Atoms/Product.jsx';

const Home = () => {
  const text = `Si las tablas fáciles de montar en la serie Classix te dan
    ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso
    (con tu patineta por supuesto), entonces hemos hecho nuestro trabajo.
  `;
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
        <Text title="CLASSIX" text={text} />
        <div className="Grid">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </main>
    </>
  );
};

export default Home;
