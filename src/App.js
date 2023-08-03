import './App.scss';
import React from 'react';
import Image from './page/Image';
import Home from './page/Home';
import Css from './page/Css';
import Router from './page/Router';
import Not from './page/Not';
import StateProps from './page/StateProps';

import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='wrap'>
      <header>
        <nav>
          <Link to="/">HOME </Link>
          <Link to="/css">CSS 활용 </Link>
          <Link to="/img">IMAGE 활용 </Link>
          <Link to="/router" state='a100'>ROUTER(페이지 이동)</Link>
          <Link to="/props">State&Props </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/css' element={<Css/>} />
          <Route path='/img' element={<Image/>} />
          <Route path='/router' element={<Router/>} />
          <Route path='/props' element={<StateProps data='1000' name='kos' />} />
          <Route path='/*' element={<Not/>} />
          
        </Routes>
      </main>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
