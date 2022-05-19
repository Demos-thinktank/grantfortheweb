import { Routes, Route } from "react-router-dom";
import './css/pages.css'

import LandingPage from './pages/LandingPage';
import ContentOne from './pages/ContentOne';
import ContentTwo from './pages/ContentTwo';
import ContentThree from './pages/ContentThree';
import ContentFour from './pages/ContentFour';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="one" element={ <ContentOne/> } />
        <Route path="two" element={ <ContentTwo/> } />
        <Route path="three" element={ <ContentThree/> } />
        <Route path="four" element={ <ContentFour/> } />
      </Routes>
    </div>
  );
}

export default App;