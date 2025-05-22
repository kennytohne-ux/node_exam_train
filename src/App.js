import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import EditCand from './components/editC';
import DeleteC from './components/delC';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/editC/:id' element={<EditCand />} />
        <Route path='/deleteC/:id' element={<DeleteC />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
