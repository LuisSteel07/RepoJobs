import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './css/main.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JobsView from './views/JobsView'
import PrincipalView from './views/PrincialView'
import MainTemplate from './templates/MainTemplate'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes >
      <Route path="/" element={
        <MainTemplate>
          <Navbar />
          <PrincipalView />
          <Footer />
        </MainTemplate>
      }/>
      <Route path="/jobs" element={
        <MainTemplate>
          <Navbar />
          <JobsView />
          <Footer />
        </MainTemplate>
      }/>
    </Routes>
  </BrowserRouter>
)
