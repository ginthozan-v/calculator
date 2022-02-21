import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Calculator from './containers/Calculator';
import { ROOT } from './config/endpoints';
import Feedback from './containers/Feedback';


function App() {
  return (
    <>
      <div className='flex flex-col h-screen max-h-screen px-6 sm:px-16 md:px-20 lg:px-40 font-Lato'>
        <Header />
        <Routes>
          <Route path={ROOT} element={<Home />} />
          <Route path="/*" element={<Calculator />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
