import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import FormPage from "./pages/FormPage";
import MainPage from "./pages/MainPage";
import MissionPage from "./pages/MissionPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
