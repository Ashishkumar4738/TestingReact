import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
