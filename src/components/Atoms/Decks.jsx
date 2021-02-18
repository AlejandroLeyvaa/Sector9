import React from 'react';

const Decks = ({children, cls, deck}) => (
  <figure className={cls}>
    <img src={deck} alt="deck-sector-9" />
  </figure>
);

export default Decks;
