import React, { Component } from 'react';

import TextCounter from './TestCounter';
import MyForm from './MyForm';

class App extends Component {
  render() {
    return (
      <div>
        <TextCounter limit={20}/>
        <MyForm />
      </div>
    );
  }
}

export default App;
