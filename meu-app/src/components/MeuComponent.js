import React, { Component } from 'react';

/* 
function MeuComponente() {
    return <h1>TreinaWeb</h1>;
}
*/

class MeuComponente extends Component {
    render() {
        const props = this.props; 
        return <h1>TreinaWeb, { this.props.nome }</h1>;
    }    
}

export const MeusComponentes = {
    TreinaWeb: function(props) {
    return <h1>Olá web {props.nome} </h1>
    }
};

export default MeuComponente;