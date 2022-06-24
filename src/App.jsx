import './App.scss';
import Header from './core/Header';
import Footer from './core/Footer';
import Home from './pages/Home';
import WorksGallery from './pages/WorksGallery';
import WorkDetail from './pages/WorkDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import NewWorkForm from './pages/Addwork';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<WorksGallery />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/works/:name' element={<WorkDetail />} />
          <Route path='/newwork' element={<NewWorkForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
