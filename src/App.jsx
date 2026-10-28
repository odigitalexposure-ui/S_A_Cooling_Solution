import React from 'react';
import Home from './Pages/Home';
import { MediaModalProvider } from './context/MediaModalContext';

function App() {
  return (
    <MediaModalProvider>
      <Home />
    </MediaModalProvider>
  );
}

export default App;

