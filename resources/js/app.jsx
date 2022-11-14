import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import Links from "./Links.json";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path={Links.home} element={<Home />} />
                    <Route path={Links.addProduct} element={<AddProduct />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
