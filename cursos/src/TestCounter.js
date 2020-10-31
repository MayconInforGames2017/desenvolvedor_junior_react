import React, { Component } from 'react';

class TextCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalChars: 0
        }
    }

    render() {
        const { state } = this;
        return (
            <div>
                <h1>Meu Computador</h1>
                <textarea />
                <div>
                    <strong>Total:</strong> { state.totalChars }
                </div>
            </div>
        )
    }
}

export default TextCounter;