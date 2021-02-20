import React, { useState, useEffect } from 'react';
import BackgroundLogo from '../Molecules/BackgroundLogo';
import BackgroundDecks from '../Molecules/BackgroundDecks';
import BackgroundComplete from '../Molecules/BackgroundComplete';

const Preview = () => {
  const [current, setCurrent] = useState(1);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.position = 'fixed';
    setTimeout(() => {
      console.log(1);
      setLoading(false);
      console.log(loading);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <BackgroundLogo />
    );
  } else if(current === 0) {
    return (
      <BackgroundDecks />
      );
    } else if(current === 1) {
      return (
        <BackgroundComplete />
      );
  }
};

export default Preview;
