import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { IconButton, Typography } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TableRow({ id, name, available, price, quantity, avatar, category }) {
    console.log(avatar);
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td className="available">
                <span className={available ? "bg-success" : "bg-danger"}></span>
            </td>
            <td>{price}$</td>
            <td>{category}</td>
            <td>
                <img className="img-fluid" src={avatar} alt={name} />
            </td>
            <td>{quantity}</td>

            <td>
                <Link to={`/delete/${id}`}>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Link>
                <Link to={`/edit/${id}`}>
                    <IconButton>
                        <ModeEditIcon />
                    </IconButton>
                </Link>
            </td>
        </tr>
    );
}

export default TableRow;
