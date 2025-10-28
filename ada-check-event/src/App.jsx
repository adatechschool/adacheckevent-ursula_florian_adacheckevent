import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Categories from "./pages/Categories";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/Categories/:nom" element={<Categories />} />
      </Routes>
    </>
  );
}
