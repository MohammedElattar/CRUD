import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TableRow({ id, name, available, price, quantity, avatar, category }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td className="available">
                <span className={available ? "bg-success" : "bg-danger"}></span>
            </td>
            <td>{price}$</td>
            <td>{quantity}</td>
            <td>{category}</td>
            <td>
                <img
                    className="img-fluid"
                    style={{
                        width: "100px",
                        height: "50px",
                        objectFit: "cover",
                    }}
                    src={avatar}
                    alt={name}
                />
            </td>

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
