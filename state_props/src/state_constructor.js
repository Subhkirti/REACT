import React from "react";
class My extends React.Component {
    constructor(){
        super();
        this.state = {
            data: 1
        }
    }
    update = () => {
        this.setState({ data: this.state.data + 1 })
    }
    render() {
        return (
            <>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.update()}>update data</button>
            </>
        )
    }
}
export default My;