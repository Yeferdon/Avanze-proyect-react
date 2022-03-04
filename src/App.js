import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Questions from "./pages/Questions";
import NotFound from "./components/NotFound";
import Policts from "./pages/Policts";
import Services from "./pages/Services";
import Search_employ from "./pages/Search_employ";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/politics" element={<Policts />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/search_employer" element={<Search_employ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
