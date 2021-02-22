import React, { useEffect } from 'react';
import Header from '../Molecules/Header.jsx';
import Decks from '../Atoms/Decks';
import basilisck from '../../assets/svg/Img/Decks/Classix/BASILISK-DECK.svg';
import Cart from '../Atoms/Cart';
import Arrow from '../Atoms/Arrow';
import Menu from '../Atoms/MenuIcon';
import Product from '../Atoms/Product';
import Button from '../Atoms/Button';

const Buy = () => {
  document.body.style.position = 'static';
  return (
    <>
      <Header cls="Header Header-padding">
        <div className="Header-icons">
          <Arrow cls="icon-arrow" />
          <h2 className="Title">Volver</h2>
        </div>
        <div className="Header-icons">
          <Cart cls="icon-cart" />
          <Menu cls="icon-menu" />
        </div>
      </Header>
      <main className="Main Buy">
        <article>
          <h2 className="Title Padding-horizontal">Carrito de compras</h2>
          <div className="Padding-horizontal Title-container Flex">
            <h2 className="Margin-right">Productos</h2>
            <h2 className="Margin-left">$72.00 USD</h2>
          </div>
        </article>
        <article className="Flex Padding-vertical">
          <Product cls="Product Padding-horizontal" />
          <div className="Width-all Flex-between">
            <div className="">
              <h2>Product</h2>
              <h2>Price</h2>
            </div>
            <div className="Padding-horizontal">
              <i>Icon</i>
            </div>
          </div>
        </article>
        <Button
          cls="Buy-button-container"
          title="PAGAR CON PAYPAL"
        />
      </main>
    </>
  );
};

export default Buy;
