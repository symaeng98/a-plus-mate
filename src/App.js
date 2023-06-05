import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Result from "./pages/Result"
import ReactGA from 'react-ga'
function App() {
  ReactGA.initialize('G-87BQCPWHR3')
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
