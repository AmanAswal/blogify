import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import PostListPage from "./pages/PostListPage";
import SinglePostPage from "./pages/SinglePostPage";
import WritePostPage from "./pages/WritePostPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          {/* Layout with shared components */}
          <Route path="/" element={<MainLayout />} >
          {/* Define child routes */}
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/write" element={<WritePostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/:slug" element={<SinglePostPage />} />
          <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
