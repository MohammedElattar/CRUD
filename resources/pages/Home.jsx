import styled from "styled-components";
import React, { useEffect, useState } from "react";
import data from "../data.json";
import TableRow from "../components/TableRow";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { actions } from "../redux/store";

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
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state);

    const fetchProducts = async () => {
        // dispatch(actions.fetchRequest());
        // try {
        //     const response = await axios.get("");
        //     const data = respose.data();
        //     dispatch(actions.fetchSuccess(data));
        // } catch (error) {
        //     dispatch(actions.fetchFail(error));
        // }
    };

    console.log(loading, error, products);

    useEffect(() => {
        fetchProducts();
    }, []);

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
