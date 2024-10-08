import Home from "../pages/Home"
import { BrowserRouter, Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import Cadastro from "../pages/Cadastro";
import CreatePublicationPage from "../pages/CreatePublicationPage";
import Publishers from "../pages/Publishers";
import Feed from "../pages/Feed";
function DefaultRoutes() {
    
    return (
      <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="/register" element={<Cadastro />} />
            <Route path="/createPublication" element={<CreatePublicationPage />} />
            <Route path="/publishers" element={<Publishers />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </BrowserRouter>
    )
  }
  
export default DefaultRoutes