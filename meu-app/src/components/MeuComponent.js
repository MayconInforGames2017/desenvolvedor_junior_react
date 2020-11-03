import React, { Component } from 'react';

/* 
function MeuComponente() {
    return <h1>TreinaWeb</h1>;
}
*/

class MeuComponente extends Component {
    render() {
        return <h1>TreinaWeb</h1>;
    }    
}

export const MeusComponentes = {
    TreinaWeb: function() {
        return <h1>Olá web</h1>
    }
}

export default MeuComponente;