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
        text-transform: capitalize;
        text-decoration: none;
        border-radius: 0;
        padding: 0;
        a {
            display: flex;
            align-items: center;
            padding: 0 20px;
            text-decoration: none;
            color: #000;
            height: 100%;
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
            </div>
        </Container>
    );
}

export default Navbar;
