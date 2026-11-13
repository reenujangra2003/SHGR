
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import PartnerForm from './pages/PartnerForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<About/>} />
          <Route path='/our-expertise' element={<Expertise/>} />
          <Route path='/our-services' element={<Services/>} />
          <Route path='/our-projects' element={<Projects/>} />
          <Route path='/our-team' element={<Team/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/partner-form' element={<PartnerForm/>} />

        </Route></Routes></BrowserRouter>
  );
}

export default App;
