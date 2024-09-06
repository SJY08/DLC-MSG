import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/StartPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import FormPage from "./pages/FormPage"
import MainPage from "./pages/MainPage"
import MissionPage from "./pages/MissionPage"
import InformPage from "./pages/InformPage"
import AllVideo from "./pages/AllVideo"
import AllNews from "./pages/AllNews"
import ClubPage from "./pages/Club/ClubPage"
import NoticePost from "./pages/Club/NoticePost"
import TopPost from "./pages/Club/TopPost"
import AllPosts from "./pages/Club/AllPosts"

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
                <Route path="/inform" element={<InformPage />} />
                <Route path="/video" element={<AllVideo />} />
                <Route path="/news" element={<AllNews />} />
                <Route path="/club" element={<ClubPage />} />
                <Route path="/notice" element={<NoticePost />} />
                <Route path="/top" element={<TopPost />} />
                <Route path="/posts" element={<AllPosts />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
