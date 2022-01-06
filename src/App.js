import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Calculator from './containers/Calculator';
import Home from "./containers/Home";

function App() {
  return (
    <div className='font-Mosk flex flex-col min-h-screen px-40'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salary-calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
