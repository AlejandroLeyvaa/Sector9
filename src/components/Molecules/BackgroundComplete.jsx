import React, { Children } from 'react';
import Rectangle from '../Atoms/Rectangle';
import TablesComplete from '../Atoms/TablesComplete';
import complete from '../../assets/svg/Img/Decks/Complete/MACKING-MINI-LOOKOUT.svg';

const BackgroundComplete = ({children}) => {
  return (
    <Rectangle cls="Flex-column-center Bg-primarySecond">
      <div className="Flex-center">
        <TablesComplete cls="Tables" table={complete} />
      </div>
      <article className="Bg-primarySecond-text">
        <h2>¡Arma tu patineta pieza por pieza!</h2>
      </article>
      {children}
    </Rectangle>
  );
};

export default BackgroundComplete;
