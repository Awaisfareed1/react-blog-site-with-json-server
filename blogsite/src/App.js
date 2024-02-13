import './components/assets/css/styles.css'
import Home from './components/logic/Home';
import Navbar from './components/logic/Navbar';
import { Route, Routes } from 'react-router-dom';
import Create from './components/logic/Create';
import BlogsDetails from './components/logic/BlogsDetails';
import NotFound from './components/logic/NotFound';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/blogs/:id' element={<BlogsDetails />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
