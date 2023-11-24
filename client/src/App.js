import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "./client/pages/HomePage";
import LoginPage from "./client/pages/LoginPage";
import Layout from "./client/Layout";
import RegisterPage from "./client/pages/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route exact path='/' element={<HomePage />}/>
          <Route exact path='/login' element={<LoginPage />}/>
          <Route exact path='/register' element={<RegisterPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
