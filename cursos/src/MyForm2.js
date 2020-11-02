import React, { Component } from 'react';

class MyForm2 extends Component {
    constructor(props) {
        super(props);

        this.inputName = React.createRef();

        this.handleSubimt = this.handleSubimt.bind(this);

        this.state = {
            list: []
        }
    }

    handleSubimt(event) {
        event.preventDefault();
        fetch(`https://api.github.com/search/repositories?q=${ this.inputName.current.value }`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data.items
                })
            })
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

                <ul>
                    { state.list.map(item => <li>{ item.full_name }</li>) }
                </ul>
            </form>
        )
    }
}

export default MyForm2;