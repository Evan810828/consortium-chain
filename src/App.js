import Header from './components/Header/Header';
import './App.css';
import HomeInfo from './components/HomeInfo/HomeInfo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SubHeader from './components/Header/SubHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
