import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route exact path='/login' element={<LoginPage />}/>
          <Route exact path='/register' element={<RegisterPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
