import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReviewFeatureDetails } from '@bghoard/review/feature-details';
import { ReviewFeatureList } from '@bghoard/review/feature-list';

export const App = () => {
  const [m, setMessage] = useState({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <BrowserRouter basename="/review">
      <h1 style={{ textAlign: 'center' }}>Board Game Hoard: Review</h1>
      <div>{m.message}</div>
      <Routes>
        <Route path="/" element={<ReviewFeatureList />} />
        <Route path="/:gameId" element={<ReviewFeatureDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
