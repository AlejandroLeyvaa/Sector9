import React from 'react';
import Rectangle from '../Atoms/Rectangle';
import Logo from '../Atoms/Logo';

const BackgroundLogo = () => {
  return (
    <Rectangle cls="FullScreen Flex-center Bg-primaryFirst">
      <Logo cls="Flex-center Bg-primaryFirst-logo" />
    </Rectangle>
  );
};

export default BackgroundLogo;
