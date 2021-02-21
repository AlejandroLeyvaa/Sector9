import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Arrow from '../Atoms/Arrow.jsx';
import BackgroundLogo from '../Molecules/BackgroundLogo';
import BackgroundDecks from '../Molecules/BackgroundDecks';
import BackgroundComplete from '../Molecules/BackgroundComplete';

const Preview = () => {
  const history = useHistory();
  const [current, setCurrent] = useState(0);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.position = 'fixed';
    setTimeout(() => {
      console.log(1);
      setLoading(false);
      console.log(loading);
    }, 100);
  }, []);

  const handleClick = (e) => {
    console.log(10);
    const arrowPosition = e.target.parentNode.className;
    if (arrowPosition === 'Arrow-right') {
      setCurrent(1);
    } else if (arrowPosition === 'Arrow-left') {
      setCurrent(0);
    }
  };

  const nextPage = () => {
    console.log('Next');
    history.push('/home');
  };

  if (loading) {
    return <BackgroundLogo />;
  } else if (current === 0) {
    return (
      <BackgroundDecks>
        <div className='Arrows-container Padding-horizontal'>
          <Arrow cls='Arrow-right' fun={handleClick} />
        </div>
      </BackgroundDecks>
    );
  } else if (current === 1) {
    return (
      <BackgroundComplete>
        <div className='Arrows-container Flex-between Padding-horizontal'>
          <Arrow cls='Arrow-left' fun={handleClick} />
          <Arrow cls='Arrow-right' fun={nextPage} />
        </div>
      </BackgroundComplete>
    );
  }
};

export default Preview;
