import styled from "styled-components";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";

const Container = styled.div`
    padding: 50px 200px;
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .input-group {
            gap: 20px;
            display: flex;
            /* justify-content: stretch; */
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
    console.log(available);
    return (
        <Container>
            <form>
                <div className="input-group">
                    <TextField
                        label="name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input"
                    />
                    <TextField
                        type="number"
                        label="price"
                        variant="outlined"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        className="input"
                    />
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
        </Container>
    );
}

export default AddProduct;
