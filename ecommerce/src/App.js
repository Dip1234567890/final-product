import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import CategorySection from './components/pages/CategorySection';
import Homepage from './components/pages/Homepage';
import Navbar from './components/common/Navbar';
import PaintingsItems from './components/pages/PaintingsItems';
import Candle from './components/pages/Candle';
import Single from './components/pages/Single';
import Orders from './components/pages/Orders';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import CartPage from './components/pages/Cart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/CategorySection' element={<CategorySection/>}/>
      <Route path='/PaintingsItems' element={<PaintingsItems/>}/>
      <Route path='/candle' element={<Candle/>}/>
      <Route path='/Single' element={<Single/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Cart' element={<CartPage/>}/>
      
      



    </Routes>
    </BrowserRouter>
  );
}

export default App;


