import styled from "styled-components";
import React, { useEffect } from "react";
import TableRow from "../components/TableRow";
import { useSelector } from "react-redux";

const Container = styled.div`
    table {
        width: 100%;
        thead {
            tr {
                td {
                    font-weight: bold;
                }
                padding-bottom: 30px;
            }
        }
        tr {
            display: grid;
            grid-template-columns: auto repeat(7, 1fr);
            font-family: roboto, sans-serif;
            padding: 5px;
            td {
                text-align: center;
            }
            td:first-child {
                padding: 0px 20px;
            }
        }
        tbody {
            tr {
                .available {
                    span {
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        display: block;
                        margin: 0 auto;
                    }
                }
            }
        }
    }
`;

function Home() {
    const { products } = useSelector((state) => state);

    return (
        <Container>
            <div className="container pt-5">
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>name</td>
                            <td>available</td>
                            <td>price</td>
                            <td>quantity</td>
                            <td>category</td>
                            <td>image</td>
                            <td>other</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <TableRow key={product.id} {...product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}

export default Home;
