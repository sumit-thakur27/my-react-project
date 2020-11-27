import './employee.css'
// const Employee = (props) => {
//     return (
//         <div className='employee'>
//             <h1>Name</h1>
//             <h3>{props.name}</h3>
//             <h1>Age</h1>
//             <h3>{props.age}</h3>
//             <input type="text" value={props.name} onChange={props.Change} className="input_"></input>
//         </div>
//     )
// }
// export default Employee
const Employee = (props) => {
    return (
        <div className="employee">
            <h1>Name</h1>
            <h3>{props.name}</h3>
            <h1>Age</h1>
            <h3>{props.age}</h3>
            <input type="text" value={props.name} onChange={props.Change} className="input_"></input>
        </div>
    )
}
export default Employee;