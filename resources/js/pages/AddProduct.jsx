import styled from "styled-components";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";

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

    return (
        <Container>
            <div className="container pt-5">
                <form>
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
                                className="w-100"
                            />
                        </div>
                        <div className="col-6 pe-2">
                            <TextField
                                label="name"
                                variant="outlined"
                                value={name}
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
                            />
                        }
                        label="available"
                    />
                    <Button variant="outlined">add</Button>
                </form>
            </div>
        </Container>
    );
}

export default AddProduct;
