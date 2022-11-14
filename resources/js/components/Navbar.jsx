import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Links from "../Links.json";

const Container = styled.div`
    border-bottom: 1px solid #ccc;
    .container {
        display: flex;
        height: 40px;
    }
    button {
        border-right: 1px solid #ccc;
        padding: 0 20px;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        text-decoration: none;
        border-radius: 0;
        a {
            text-decoration: none;
            color: #000;
        }
    }
`;

function Navbar() {
    return (
        <Container>
            <div className="container">
                <Button variant="outline">
                    <Link to={Links.home}>products</Link>
                </Button>
                <Button variant="outline">
                    <Link to={Links.addProduct}>add product</Link>
                </Button>
                <Button variant="outline">
                    <Link to="/delete">delete product</Link>
                </Button>
                <Button variant="outline">
                    <Link to="/edit">edit product</Link>
                </Button>
            </div>
        </Container>
    );
}

export default Navbar;
