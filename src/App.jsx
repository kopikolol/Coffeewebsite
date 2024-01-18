import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/BaseLayout"
import HomePage from "./pages/HomePage"
import NewsPage from "./pages/NewsPage"
import ProfilePage from "./pages/ProfilePage"
import ToDosPage from "./pages/ToDosPage"
import AboutPage from "./pages/AboutPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Todo" element={<ToDosPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}