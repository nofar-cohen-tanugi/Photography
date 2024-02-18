import React, { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import './assets/styles/imdex.scss';
import './assets/styles/flag.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18n from './i18n';

const queryClient = new QueryClient();

const App: React.FC = () => {
  useEffect(() => {
    const newDirection = i18n.dir(i18n.language);
    document.documentElement.setAttribute('dir', newDirection);
  }, []);

  return (
    <div>
      <div className='gradient'></div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
};

const RootApp = () => {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PrimeReactProvider>
  );
};

export default RootApp;
