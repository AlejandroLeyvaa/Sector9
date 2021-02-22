import React from 'react';
import rayCollins from '../../assets/svg/Img/Decks/Classix/RAY-COLLINS-MERCHANT-DECK.svg';

const Product = ({cls, children}) => {
  return (
    <>
      <article className={cls}>
        <figure className="Product-figure">
          <img src={rayCollins} alt="" />
        </figure>
        {children}
      </article>
    </>
  );
};

export default Product;
