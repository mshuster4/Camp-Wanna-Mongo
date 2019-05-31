import React from 'react';

export function ScoreTable({ children }) {
    return (
            <tbody>{children}</tbody>
    );
}

export function Player({children}) {
    return <tr>{children}</tr>;
}