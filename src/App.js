import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProductDetail from "./pages/ProductDetail";
import Trade from "./pages/Trade";
import Education from "./pages/Education";
import Challenges from "./pages/Challenges";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Transaction from "./pages/Transaction";
import Profile from "./pages/Profile";
import ProfileLayout from "./pages/ProfileLayout";
import Address from "./pages/Address";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/education" element={<Education />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profilelayout" element={<ProfileLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Address />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
