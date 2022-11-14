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
<<<<<<< HEAD
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

=======
>>>>>>> a1015f7271887320f02444927374e70f80876cbb
    const form = useRef();
    const checkValidation = () => {
<<<<<<< HEAD
        let edit = false;
        if (!nameProps.value.trim()) {
            setNameProps((p) => ({
                ...p,
                error: true,
                helperText: "must have name",
            }));
            edit = true;
        }
        if (+priceProps.value <= 0 || isNaN(priceProps.value)) {
            setPriceProps((p) => ({
                ...p,
                error: true,
                helperText: "must have price greater than 0",
            }));
        }
=======
        // const name = nameRef.current.value;
        // if ()
>>>>>>> a1015f7271887320f02444927374e70f80876cbb
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (checkValidation()) return;

        const formData = new FormData(form.current);
        formData.append('_token' , document.querySelector("[name='csrf-token']").getAttribute("content"));

        const data = Object.fromEntries(formData.entries());

<<<<<<< HEAD
        console.log(data);
        const request = await axios.post("/add", data);
        console.log(request);
=======
        // console.log(data);
        const req = await axios.post("/add", data);
        console.log(req['data'])


>>>>>>> a1015f7271887320f02444927374e70f80876cbb
    };

    return (
        <Container>
            <div className="container pt-5">
                <form
                    ref={form}
                    encType="multipart/form-data"

                    onSubmit={handleSubmit}
                >
                    <div className="row">
                        <div className="col-6 pe-2">
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
                                name="price"
                                className="w-100"
                            />
                        </div>
                        <div className="col-6 pe-2">
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
                                name="name"
                                className="w-100"
                            />
                        </div>
                    </div>

                    <FormControlLabel
                        control={
                            <Checkbox
                                defaultChecked
                                // onChange={(e) => setAvailable(e.target.checked)}
                                name="available"
                            />
                        }
                        label="available"
                    />
                    <div class="custom-file">
                        <input
                            type="file"
                            class="custom-file-input"
                            id="validatedCustomFile"
                            required
                        />
                        <label
                            class="custom-file-label"
                            for="validatedCustomFile"
                        >
                            Choose file...
                        </label>
                        <div class="invalid-feedback">
                            Example invalid custom file feedback
                        </div>
                    </div>
                    <Button variant="outlined" type="submit">
                        add
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default AddProduct;
