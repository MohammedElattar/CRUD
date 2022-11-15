import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import DeleteProduct from "./pages/DeleteProduct";
import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";
import { actions } from "./redux/store";

function App() {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state);

    const fetchProducts = async (setLoading = true) => {
        if (setLoading) {
            dispatch(actions.fetchRequest());
        }
        try {
            const response = await axios.get("/get_products");
            const data = response.data;
            console.log("data fetched =>", data);
            dispatch(actions.fetchSuccess(data));
        } catch (error) {
            dispatch(actions.fetchFail(error));
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <>
                <Navbar />
                <main>
                    <div className="loading">Loading...</div>
                </main>
            </>
        );
    }

    if (error) {
        return (
            <Container>
                <div className="error">{error}</div>
            </Container>
        );
    }

    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/add"
                        element={<AddProduct fetch={fetchProducts} />}
                    />
                    <Route
                        path="/delete/:productId"
                        element={<DeleteProduct />}
                    />
                    <Route path="/edit/:productId" element={<EditProduct />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
