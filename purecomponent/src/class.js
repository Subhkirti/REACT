import React from 'react';
class Student extends React.Component{
    constructor( 
    ){
    super();{
        this.state={
            count:1
        }    
    }
}
    render(){
        console.log("checking.... see the diff in inspect");
        return(<>
    <h1>PURE CLASS COMPONENT{this.state.count}</h1>
    <button onClick={()=>this.setState({count:1})}>update</button>
        </>)
    }
}
export default Student;