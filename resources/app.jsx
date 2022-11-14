import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import DeleteProduct from "./pages/DeleteProduct";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddProduct />} />
                    <Route
                        path="/delete/:productId"
                        element={<DeleteProduct />}
                    />
                    <Route path="/delete" element={<DeleteProduct />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
