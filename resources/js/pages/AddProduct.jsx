import styled from "styled-components";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";
import axios from "axios";

const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .input-group {
            gap: 20px;
            display: flex;
            .input {
                flex: 1;
            }
        }
    }
`;

function AddProduct() {
    const [nameProps, setNameProps] = useState({
        error: false,
        helperText: "",
        value: "",
    });
    const [priceProps, setPriceProps] = useState({
        error: false,
        helperText: "",
        value: "0",
    });
    const [categoryProps, setCategoryProps] = useState({
        error: false,
        helperText: "",
        value: "",
    });
    const [quantityProps, setQuantityProps] = useState({
        error: false,
        helperText: "",
        value: "1",
    });
    const [available, setAvailable] = useState(true);
    const [loading, setLoading] = useState(false);

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
        if (loading) return;

        if (checkValidation()) return;
        setNameProps((p) => ({ ...p, error: false, helperText: "" }));
        setCategoryProps((p) => ({ ...p, error: false, helperText: "" }));
        setPriceProps((p) => ({ ...p, error: false, helperText: "" }));
        setQuantityProps((p) => ({ ...p, error: false, helperText: "" }));
        setLoading(true);

        const formData = new FormData();
        formData.append("name", nameProps.value);
        formData.append("price", priceProps.value);
        formData.append("category", categoryProps.value);
        formData.append("quantity", quantityProps.value);
        formData.append("available", quantityProps.value);
        const token = document
            .querySelector("[name='csrf-token']")
            .getAttribute("content");
        formData.append("_token", token);

        const data = Object.fromEntries(formData.entries());

        try {
            const req = await axios.post("/add", data);
            console.log("request response", req['data']);
        } catch (error) {
            console.log(`An error occured`);
            console.log(error['response']['data']['errors']);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div className="container pt-5">
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
                            product image (optional)
                        </label>
                        <input
                            className="form-control shadow-none"
                            type="file"
                            id="formFile"
                        />
                    </div>
                    <LoadingButton
                        variant="contained"
                        loading={loading}
                        type="submit"
                    >
                        add
                    </LoadingButton>
                </form>
            </div>
        </Container>
    );
}

export default AddProduct;
