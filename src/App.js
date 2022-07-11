import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRoute> <Account /> </ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
