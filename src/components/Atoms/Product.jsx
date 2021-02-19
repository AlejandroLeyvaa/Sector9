import React from 'react';
import rayCollins from '../../assets/svg/Img/Decks/Classix/RAY-COLLINS-MERCHANT-DECK.svg';

const Product = () => {
  return (
    <>
      <article className="Product">
        <figure className="Product-figure">
          <img src={rayCollins} alt="" />
        </figure>
        <p className='Text'>Basilisk Deck</p>
      </article>
    </>
  );
};

export default Product;
