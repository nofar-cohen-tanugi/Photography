import React from 'react';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import './assets/styles/imdex.scss';
import './assets/styles/flag.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <div dir='rtl'>
      <div className='gradient'></div>

      {/* <div className='circle xxlarge shade1'></div>
      <div className='circle xlarge shade2'></div>
      <div className='circle large shade3'></div>
      <div className='circle mediun shade4'></div>
      <div className='circle small shade5'></div> */}
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
