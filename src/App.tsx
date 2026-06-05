import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import IChingPage from './pages/IChingPage';
import MeihuaPage from './pages/MeihuaPage';
import ResultPage from './pages/ResultPage';
import HistoryPage from './pages/HistoryPage';

/**
 * Main application component with routing and navigation.
 */
const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <main
        className="container"
        style={{
          paddingTop: '80px',
          minHeight: '100vh',
          paddingBottom: '20px',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iching" element={<IChingPage />} />
          <Route path="/meihua" element={<MeihuaPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
};

export default App;
