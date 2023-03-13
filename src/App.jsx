import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllJobs from './pages/AllJobs';
import Stats from './pages/Stats';
import Profile from './pages/Profile';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import SharedLayout from './pages/SharedLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<SharedLayout />}>
          <Route index element={<Stats />}></Route>
          <Route path='/dashboard/jobs' element={<AllJobs />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
