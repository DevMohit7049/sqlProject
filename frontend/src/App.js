import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Update from './Update';
import View from './View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={ <Login/>}></Route>
         <Route path='/signup' element={ <Signup/>}></Route>
         <Route path='/home' element={ <Home/>}></Route>
         <Route path='/update/:id' element={<Update/>}></Route>
         <Route path='/view/:id' element={<View/>}></Route>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
