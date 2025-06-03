import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatsPage from './pages/CatsPage';
import AdoptionForm from './pages/AdoptionForm';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';
import ContactsPage from './pages/ContactsPage';
import DonationForm from './pages/DonationForm';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/adoption" element={<AdoptionForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/donation" element={<DonationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;