import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import './assets/styles/imdex.scss';
import './assets/styles/flag.scss';

const App = () => {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <div className='m-3' dir='rtl'>
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<ContactPage />} />
          </Routes>
        </Router>
      </div>
    </PrimeReactProvider>
  );
};

export default App;
