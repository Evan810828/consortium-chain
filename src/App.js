import Header from './components/Header/Header';
import './App.css';
import HomeInfo from './components/HomeInfo/HomeInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="px-[200px]">
        <HomeInfo />
      </div>
    </div>
  );
}

export default App;
