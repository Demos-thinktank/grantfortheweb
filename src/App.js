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
        <Route path="what-is-web-monetisation" element={ <ContentOne/> } />
        <Route path="why-does-web-monetisation-matter" element={ <ContentTwo/> } />
        <Route path="what-do-online-workers-think" element={ <ContentThree/> } />
        <Route path="what-should-be-done" element={ <ContentFour/> } />
      </Routes>
    </div>
  );
}

export default App;