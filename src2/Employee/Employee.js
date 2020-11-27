import './Employee.css';
const Employee=(props)=>
{
    return(
        <div className="Employee" onClick={props.click}>
            <h1>Name</h1>
            <p>{props.name}</p>
            <h2>Age</h2>
            <p>{props.age}</p>
            <p>
                <input type="text" onChange={props.change} value={props.name} />
            </p>
        </div>
    );
}
export default Employee;