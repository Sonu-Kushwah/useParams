import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Error404 from './component/404';
import User from './component/User';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path="/404" element={<Error404/>}></Route>
      <Route path="/User" element={<User/>}></Route>
      <Route path="/User/:name" element={<User/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
