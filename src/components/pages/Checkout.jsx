import React, { useEffect } from 'react';
import Header from '../Molecules/Header.jsx';
import Decks from '../Atoms/Decks';
import basilisck from '../../assets/svg/Img/Decks/Classix/BASILISK-DECK.svg';
import Cart from '../Atoms/Cart';
import Arrow from '../Atoms/Arrow';
import Menu from '../Atoms/MenuIcon';

const Checkout = () => {
  const text = `Si las tablas fáciles de montar en la serie Classix te dan
    ganas de dejar todo lo que estás haciendo y viajar a un lugar hermoso
    (con tu patineta por supuesto), entonces hemos hecho nuestro trabajo.
  `;
  document.body.style.position = 'static';
  return (
    <>
      <article className="Checkout Flex-column-center">
        <div className="Checkout-product">
          <Header cls="Header">
            <div className="Header-icons">
              <Arrow cls="icon-arrow" />
              <h2 className="Title">Home</h2>
            </div>
            <div className="Header-icons">
              <Cart cls="icon-cart" />
              <Menu cls="icon-menu" />
            </div>
          </Header>
          <Decks cls="Checkout-product-figure" deck={basilisck} />
          <div className='Checkout-small-container'>
            <div className="Checkout-product-small"></div>
            <div className="Checkout-product-small"></div>
          </div>
        </div>
        <div className="Checkout-product-desc">
          <div className="Flex-between Checkout-title-container">
            <h2>Basilisk Deck</h2>
            <h2>$ 72.00 USD</h2>
          </div>
          <p className="Text">
            Un descendiente directo y más corto de nuestro Pin OG, el Basilisk
            fácil de montar está listo para establecer algunas líneas clásicas.
            !Ábrase camino por el paseo maritimo de noche o de día con las
            ruedas Lumithane de 67 mm, con núcleos LED que alimentan el uretano
            Glow in the Dark¡ Si eso no fue suficiente para iluminar tu camino,
            el mazo negro completamente sumergido presenta un gráfico de Glow in
            the Dark que brilla sin importar la hora del dia.
          </p>
          <h2>Dimensiones</h2>
          <h3>Longitud: 40.0"</h3>
          <h3>Ancho: 9.25</h3>
          <h3>Distancia entre ejes: 27.75"</h3>
          <h2>Características</h2>
          <p className="Text">
            7 capas de arce Full Dip Black Deck LED Powered GID Lumithane Wheels
            Brillan en la oscuridad Lámina por Daniel Sheridan
          </p>
        </div>
        <div className="Flex-column-center Checkout-button-container">
          <button className="Button">Añadir al carrito</button>
        </div>
      </article>
    </>
  );
};

export default Checkout;
