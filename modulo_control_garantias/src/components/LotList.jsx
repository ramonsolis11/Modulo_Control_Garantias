// components/LotList.js
import React from 'react';

const LotList = ({ lots }) => {
    return (
        <div>
        <h2>Lista de Lotes</h2>
        <ul>
            {lots.map((lot) => (
            <li key={lot.id}>{lot.name}</li>
            ))}
        </ul>
        </div>
    );
};

export default LotList;
