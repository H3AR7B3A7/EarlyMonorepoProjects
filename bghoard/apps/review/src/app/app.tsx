import React, { useEffect, useState } from 'react';

export const App = () => {

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
  }, []);

  return (
    <>
      Board Game Hoard: Review
    </>
  );
};

export default App;
