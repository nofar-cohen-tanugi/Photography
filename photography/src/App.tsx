import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
