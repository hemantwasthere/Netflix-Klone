import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
