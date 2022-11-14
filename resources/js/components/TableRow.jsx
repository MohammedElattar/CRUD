import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { IconButton, Typography } from "@mui/material";
import styled from "styled-components";

function TableRow({ id, name, available, price, quantity, image, category }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td className="available">
                <span className={available ? "true" : "false"}></span>
            </td>
            <td>{price}$</td>
            <td>{category}</td>
            <td>
                <img src={image} alt={name} />
            </td>
            <td>{quantity}</td>

            <td>
                <IconButton onClick={() => console.log(`hello`)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <ModeEditIcon />
                </IconButton>
            </td>
        </tr>
    );
}

export default TableRow;
