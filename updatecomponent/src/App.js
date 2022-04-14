import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "anil",
      count: 0
    }
    console.log("Constructor will be first!");
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log("componentUpodate will be third!", preState);
  }
  render() {
    console.log("Render will be second!");
    return (
      <React.StrictMode>
        <h1>Component DIDUPDATE() will be third{this.state.count}</h1>
        <h2>this is used for  taking the previous values</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update</button>
      </React.StrictMode>

    );
  }
}


export default App;
