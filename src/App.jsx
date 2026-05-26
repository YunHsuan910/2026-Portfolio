import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//導入樣式
import "./styles/App.css";
//導入元件
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./components/Details";
//導入頁面
import Loading from "./pages/Loading";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模擬載入時間，或是等待 API 抓取完成
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/project/:id" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="bg"></div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
