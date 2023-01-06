import Header from './components/Header/Header';
import './App.css';
import HomeInfo from './pages/HomeInfo/HomeInfo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SubHeader from './components/Header/SubHeader';
import Block from './pages/Block/Block';
import BlockDetail from './pages/Block/BlockDetail';
import Trans from './pages/Trans/Trans';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeInfo />} />
          <Route path='/blocks' element={<Block />} />
          <Route path='/blocks/:blockId' element={<BlockDetail />} />
          <Route path='/trans' element={<Trans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
