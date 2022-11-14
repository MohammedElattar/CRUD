import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddProduct />} />
                </Routes>
            </main>
        </>
    );
}

export default App;