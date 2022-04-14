import React from 'react';
class App extends React.Component{
  constructor(){
  super();
  console.log("Constructor will be first!");
  }
  render()
  {
  console.log("Render will be second!");
  return (
   <>
<h1>Component DIDMOUNT() will be third</h1>
<h2>this is used for Api's calling</h2>
   </>
  );
  }
  componentDidMount(){
    console.log("componentDidMount will be third!");
  }

}

export default App;
