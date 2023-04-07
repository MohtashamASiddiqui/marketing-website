import { Navbar, Footer } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Signup from "./pages/SignUp/Signup";
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
