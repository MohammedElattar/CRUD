import styled from "styled-components";
import React from "react";
import data from "../data.json";
import TableRow from "../components/TableRow";

const Container = styled.div`
    table {
        width: 100%;
        thead {
            tr {
                display: grid;
                grid-template-columns: auto 1fr 1fr 1fr 1fr;
                font-family: roboto, sans-serif;
                padding: 5px;
                td {
                    text-align: center;
                }
                td:first-child {
                    padding: 0px 20px;
                }
            }
        }
        tbody {
            tr {
                display: grid;
                grid-template-columns: auto 1fr 1fr 1fr 1fr;
                font-family: roboto, sans-serif;
                padding: 5px;
                td {
                    text-align: center;
                }
                td:first-child {
                    padding: 0px 20px;
                }
                .available {
                    span {
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        display: block;
                        background-color: red;
                        margin: 0 auto;
                    }
                    .true {
                        background-color: green;
                    }
                }
            }
        }
    }
`;

function Home() {
    return (
        <Container>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>name</td>
                            <td>available</td>
                            <td>price</td>
                            <td>other</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product) => (
                            <TableRow key={product.id} {...product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}

export default Home;
