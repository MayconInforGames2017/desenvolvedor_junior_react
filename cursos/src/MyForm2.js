import React, { Component } from 'react';

class MyForm2 extends Component {
    constructor(props) {
        super(props);

        this.inputName = React.createRef();

        this.handleSubimt = this.handleSubimt.bind(this);
    }

    handleSubimt(event) {
        event.preventDefault();
    }

    render() {
        const { state } = this;
        return (
            <form onSubmit={ this.handleSubimt }>
                <div>
                    <label>
                        Name: 
                        <input type="text" name="name" ref={ this.inputName } />
                    </label>
                </div>

                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default MyForm2;