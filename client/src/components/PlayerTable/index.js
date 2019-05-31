import React from 'react';
import Table from "react-bootstrap/Table";
import { Container } from "../Grid";

export function ScoreTable({ children }) {
    return (
        <Container>
            <Table>{children}</Table>
        </Container>
    );
}

export function Player({children}) {
    return <tbody>{children}</tbody>;
}