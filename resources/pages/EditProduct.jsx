import { LoadingButton } from "@mui/lab";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

function EditProduct() {
    const { productId } = useParams();
    const { products } = useSelector((state) => state);
    const product = products.find((e) => e.id == productId);

    const [nameProps, setNameProps] = useState({
        error: false,
        helperText: "",
        value: product?.name || "",
    });
    const [priceProps, setPriceProps] = useState({
        error: false,
        helperText: "",
        value: product?.price || "",
    });
    const [categoryProps, setCategoryProps] = useState({
        error: false,
        helperText: "",
        value: product?.category || "",
    });
    const [quantityProps, setQuantityProps] = useState({
        error: false,
        helperText: "",
        value: product?.quantity || "",
    });
    const [available, setAvailable] = useState(true);
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]);

    if (!product) {
        return <Navigate to="/" replace />;
    }

    const checkValidation = () => {
        let edit = false;
        if (!nameProps.value.trim()) {
            setNameProps((p) => ({
                ...p,
                error: true,
                helperText: "not valid name",
            }));
            edit = true;
        }
        if (+priceProps.value <= 0 || isNaN(+priceProps.value)) {
            setPriceProps((p) => ({
                ...p,
                error: true,
                helperText: "not valid price",
            }));
            edit = true;
        }
        if (!categoryProps.value.trim()) {
            setCategoryProps((p) => ({
                ...p,
                error: true,
                helperText: "not valid category",
            }));
            edit = true;
        }
        if (+quantityProps.value <= 0 || isNaN(+quantityProps.value)) {
            setQuantityProps((p) => ({
                ...p,
                error: true,
                helperText: "not valid quantity",
            }));
            edit = true;
        }
        if (edit) {
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (checkValidation()) return;
        setNameProps((p) => ({ ...p, error: false, helperText: "" }));
        setCategoryProps((p) => ({ ...p, error: false, helperText: "" }));
        setPriceProps((p) => ({ ...p, error: false, helperText: "" }));
        setQuantityProps((p) => ({ ...p, error: false, helperText: "" }));
        setLoading(true);

        const data = {
            name: nameProps.value,
            price: priceProps.value,
            category: categoryProps.value,
            quantity: quantityProps.value,
            available,
            // _token: token,
        };
        if (files) data.image = files[0];

        try {
            const req = await axios({
                method: "post",
                url: "/edit",
                data: data,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error) {
            console.log(`an error occured =>`);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div className="container pt-5">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6 pe-2 pb-4 p-0">
                            <TextField
                                label="name"
                                variant="outlined"
                                value={nameProps.value}
                                onChange={(e) =>
                                    setNameProps((p) => ({
                                        ...p,
                                        value: e.target.value,
                                    }))
                                }
                                error={nameProps.error}
                                helperText={nameProps.helperText}
                                className="w-100"
                            />
                        </div>
                        <div className="col-6 ps-2 pb-4 p-0">
                            <TextField
                                type="number"
                                label="price"
                                variant="outlined"
                                value={priceProps.value}
                                onChange={(e) =>
                                    setPriceProps((p) => ({
                                        ...p,
                                        value: e.target.value,
                                    }))
                                }
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                error={priceProps.error}
                                helperText={priceProps.helperText}
                                className="w-100"
                            />
                        </div>

                        <div className="col-6 pe-2 pb-4 p-0">
                            <TextField
                                label="category"
                                variant="outlined"
                                value={categoryProps.value}
                                onChange={(e) =>
                                    setCategoryProps((p) => ({
                                        ...p,
                                        value: e.target.value,
                                    }))
                                }
                                error={categoryProps.error}
                                helperText={categoryProps.helperText}
                                className="w-100"
                            />
                        </div>
                        <div className="col-6 ps-2 pb-4 p-0">
                            <TextField
                                type="number"
                                label="quantity"
                                variant="outlined"
                                value={quantityProps.value}
                                onChange={(e) =>
                                    setQuantityProps((p) => ({
                                        ...p,
                                        value: e.target.value,
                                    }))
                                }
                                error={quantityProps.error}
                                helperText={quantityProps.helperText}
                                className="w-100"
                            />
                        </div>
                    </div>

                    <FormControlLabel
                        control={
                            <Checkbox
                                defaultChecked
                                onChange={(e) => setAvailable(e.target.checked)}
                            />
                        }
                        label="available"
                    />
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">
                            change image
                        </label>
                        <input
                            className="form-control shadow-none"
                            type="file"
                            id="formFile"
                            onChange={(e) => setFiles(e.target.files)}
                        />
                    </div>
                    <LoadingButton
                        variant="contained"
                        loading={loading}
                        type="submit"
                        className="w-100"
                    >
                        add
                    </LoadingButton>
                </form>
            </div>
        </Container>
    );
}

export default EditProduct;
