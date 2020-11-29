import './employee.css'
const Employee = (props) => {
    return (
        <div className="employee">
            <h1>Name</h1>
            <h3 onClick={props.clk}>{props.name}</h3>
            <h1>Age</h1>
            <h3>{props.age}</h3>
            <input type="text" onChange={props.chg} className="input_" defaultValue={props.name}></input>
        </div>
    )
}
export default Employee;