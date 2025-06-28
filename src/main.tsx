import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import JobsView from './views/JobsView'
import PrincipalView from './views/PrincialView'
import MainTemplate from './templates/MainTemplate'

import './css/main.css'
import CreateJobView from './views/CreateJobView'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes >
      <Route path="/" element={
        <MainTemplate>
          <PrincipalView />
        </MainTemplate>
      }/>
      <Route path="/jobs" element={
        <MainTemplate>
          <JobsView />
        </MainTemplate>
      }/>
      <Route path="/create_jobs" element={
        <MainTemplate>
          <CreateJobView />
        </MainTemplate>
      }/>
    </Routes>
  </BrowserRouter>
)
