import React, { useState, useEffect } from 'react';
// import Logo from '../Atoms/Logo';
// import Background from '../Atoms/Rectangle';
import BackgroundLogo from '../Molecules/BackgroundLogo';
import BackgroundDecks from '../Molecules/BackgroundDecks';
import BackgroundComplete from '../Molecules/BackgroundComplete';

const Home = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log(1);
      setLoading(false);
      console.log(loading);
    }, 0);
  }, []);

  if (loading) {
    return (
      <BackgroundLogo />
    );
  } else {
    return (
      // <BackgroundDecks />
      <BackgroundComplete />
    );
  }
};

export default Home;
