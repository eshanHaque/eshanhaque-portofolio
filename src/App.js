import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      {/* <Nav></Nav> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='mytimeline' element={<Timeline></Timeline>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
