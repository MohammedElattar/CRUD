import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

function DeleteProduct() {
    const { productId } = useParams();
    const [idProps, setIdProps] = useState({
        error: false,
        value: productId || "",
        helperText: "",
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        if (!idProps.value.trim()) {
            setIdProps((p) => ({
                ...p,
                error: true,
                helperText: "not valid id",
            }));
            return;
        }

        try {
            const request = await axios.post("/delete", { id: idProps.value });
            console.log(`request response =>`, request);
        } catch (error) {
            console.log(`error occored`);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div className="container pt-5">
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        label="product id"
                        variant="outlined"
                        value={idProps.value}
                        onChange={(e) =>
                            setIdProps((p) => ({ ...p, value: e.target.value }))
                        }
                        error={idProps.error}
                        helperText={idProps.helperText}
                        className="w-100"
                    />
                    <LoadingButton
                        variant="contained"
                        loading={loading}
                        type="submit"
                        className="mt-3"
                    >
                        delete
                    </LoadingButton>
                </form>
            </div>
        </Container>
    );
}

export default DeleteProduct;
