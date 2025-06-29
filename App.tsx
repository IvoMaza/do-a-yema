
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Marketplace from './pages/Marketplace';
import ProducerDetail from './pages/ProducerDetail';
import Dashboard from './pages/Dashboard';
import Guides from './pages/Guides';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-brown">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/producer/:id" element={<ProducerDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
