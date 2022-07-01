import './App.scss';
import Header from './core/Header';
import Footer from './core/Footer';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import WorksGallery from './pages/WorksGallery';
import WorkDetail from './pages/WorkDetail';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import  MessageGallery  from './pages/Messages';
import { RequireAuth } from './components/RequireAuth';
import Addwork from './pages/Addwork';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { JwtContext } from './context/jwtContext';

function App() {
  //Creamos una variable de estado para saber si tenemos token o no
  const [jwt, setJwt] = useState(localStorage.getItem("token"));
  //const [user, setUser] = useState();

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/works' element={<WorksGallery />} />
            <Route path='/bio' element={<Bio />} />
            <Route path='/contact/newmessage' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/registeruser'
              element={
                <RequireAuth>
                  <RegisterUser />
                </RequireAuth>
              }
            />
            <Route
            path='/contact'
            element={
              <RequireAuth>
                <MessageGallery />
              </RequireAuth>
            }/>
            <Route
              path='/addwork'
              element={
                <RequireAuth>
                  <Addwork />
                </RequireAuth>
              }
            />
            <Route path='/works/:name' element={<WorkDetail />} />
          </Routes>

        </div>
          <Footer />
      </Router>
    </JwtContext.Provider>
  );
}

export default App;
