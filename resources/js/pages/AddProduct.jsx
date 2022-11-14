import styled from "styled-components";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
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
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(true);
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        // formData.append()

        const data = Object.fromEntries(formData.entries());

        console.log(data);
        // axios.post("/add", data);
    };

    return (
        <Container>
            <div className="container pt-5">
                <form
                    onSubmit={handleSubmit}
                    ref={form}
                    encType="multipart/form-data"
                >
                    <div className="row">
                        <div className="col-6 pe-2">
                            <TextField
                                type="number"
                                label="price"
                                variant="outlined"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                name="price"
                                className="w-100"
                            />
                        </div>
                        <div className="col-6 pe-2">
                            <TextField
                                label="name"
                                variant="outlined"
                                value={name}
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-100"
                            />
                        </div>
                    </div>

                    <FormControlLabel
                        control={
                            <Checkbox
                                defaultChecked
                                onChange={(e) => setAvailable(e.target.checked)}
                                name="available"
                            />
                        }
                        label="available"
                    />
                    <input type="file" name="image" />
                    <Button variant="outlined" type="submit">
                        add
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default AddProduct;
