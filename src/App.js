import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFounded from './components/NotFounded/NotFounded';

function App() {
  return (
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/create' element={<Home />} />
     <Route path='/event' element={<Home />} />
     <Route path='*' element={<NotFounded />} />
    </Routes>
  );
}

export default App;
