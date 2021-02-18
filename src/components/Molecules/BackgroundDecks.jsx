import React from 'react';
import Rectangle from '../Atoms/Rectangle';
import Decks from '../Atoms/Decks';
import basilisk from '../../assets/svg/Img/Decks/Classix/BASILISK-DECK.svg';
import ripped from '../../assets/svg/Img/Decks/Downhill/RIPPED-LOUIS-PRO-DECK.svg';
import daybreack from '../../assets/svg/Img/Decks/Platinum/DAYBREAK-STATIC-DECK.svg';

const BackgroundDecks = () => {
  return (
    <Rectangle cls="Flex-column-center Bg-primarySecond">
      <div className="Flex-center">
        <Decks cls="Decks" deck={basilisk} />
        <Decks cls="Decks" deck={ripped} />
        <Decks cls="Decks" deck={daybreack} />
      </div>
      <article className="Bg-primarySecond-text">
        <h2>Tenemos tablas para todos los estilos</h2>
      </article>
    </Rectangle>
  );
};

export default BackgroundDecks;
