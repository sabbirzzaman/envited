import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEvent from './components/CreateEvent/CreateEvent';
import Event from './components/Event/Event';
import Home from './components/Home/Home';
import NotFounded from './components/NotFounded/NotFounded';

function App() {
  return (
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/create' element={<CreateEvent />} />
     <Route path='/event' element={<Event />} />
     <Route path='*' element={<NotFounded />} />
    </Routes>
  );
}

export default App;
