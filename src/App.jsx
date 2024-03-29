import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayouts from "./pages/SharedLayouts";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import BlogContentsEditor from "./pages/Blog/BlogContentsEditor";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

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
            <Route path="/create-blog" element={<BlogContentsEditor />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
