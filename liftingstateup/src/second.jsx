function Second(props){
    var value={name:"Kirti",class:"8th"}
    return (
        <>
        <h1 val="hiii"> Hello {props.data}</h1>
        <button onClick={()=>props.valu(value)}>Click Me!</button>
        </>
    )
}
export default Second;