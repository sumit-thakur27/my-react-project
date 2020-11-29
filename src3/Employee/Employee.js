import './Employee.css';
const Employee=(props)=>
{
    return(
        <div className="Employee">
            <h1>Name</h1>
            <p onClick={props.clk}>{props.name}</p>
            <h2>Age</h2>
            <p>{props.age}</p>
            <p>
                <input type="text" onChange={props.chg}  defaultValue={props.name} />
            </p>
        </div>
    );
}
export default Employee;