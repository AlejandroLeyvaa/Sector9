import React, { useState, useEffect } from 'react';
// import Logo from '../Atoms/Logo';
// import Background from '../Atoms/Rectangle';
import BackgroundLogo from '../Molecules/BackgroundLogo';
import BackgroundDecks from '../Molecules/BackgroundDecks';

const Home = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log(1);
      setLoading(false);
      console.log(loading);
    }, 3000);
  }, []);

  if (loading) {
    return (
      // <Background cls=' FullScreen Flex-center Bg-primaryFirst'>
      //   <Logo cls='Flex-center Bg-primaryFirst-logo' />
      <BackgroundLogo />
    );
  } else {
    return (
      <BackgroundDecks />
    );
  }
};

export default Home;
