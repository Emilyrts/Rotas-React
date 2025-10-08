import React, { useState } from 'react';

function Estado() {
const [estaLigado, setEstaLigado] = useState(false);
function alternarStatus() {
    setEstaLigado(!estaLigado);
}
return (
    <div>
        <p>O botão está: {estaLigado ? 'Ligado' : 'Desligado'}</p>
        <button onClick={alternarStatus}>Alternar Status</button>
    </div>
    );
}

export default Estado;