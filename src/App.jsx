import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayouts from "./pages/SharedLayouts";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog/Blog";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
// import AuthPage from "./pages/AuthPage";
// import BlogContents from "./pages/Blog/BlogContents";
// import NavBar from "./components/NavBar";
import ProtectedRoutes from "./routes/ProtectedRoutes";
// import BlogsPage from "./pages/Blog/BlogsPage";
import BlogContents from "./pages/Blog/BlogContents";

// Context Provider
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route index element={<HomePage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<Contact />} />

            <Route path="/blog" element={<Blog />} />

            {/* <Route path="/register" element={<AuthPage />} /> */}
            {/* <Route path="/content-page" element={<BlogsPage />} /> */}
            <Route path="/content-page" element={<BlogContents />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<SignupPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );

   
}

export default App;
