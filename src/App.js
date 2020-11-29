import React from 'react';
import Employee from './employee/employee'
import './App.css'
class Frist_component extends React.Component {
  state = {
    exp: [
      { eid: "1001", name: "sumit", age: "19" },
      { eid: "1002", name: "shiva", age: "22" },
      { eid: "1003 ", name: "shyam", age: "24" }
    ],
    hide: true
  }
  del = (i) => {
    const Copy = [...this.state.exp]
    Copy.splice(i, 1)
    this.setState({ exp: Copy })
  }
  change = (event, id) => {
    const Copy = [...this.state.exp]
    const i = Copy.findIndex((e) => {
      return e.eid === id;
    });
    const em = Copy[i];
    em.name = event.target.value;
    Copy[i] = em;
    this.setState({ exp: Copy })

  }
  hide_show = () => {
    const v = this.state.hide;
    this.setState({ hide: !v })
  }
  render() {
    let employee_null = null;
    if (this.state.hide) {
      employee_null = (
        < div className="App" >
          {
            this.state.exp.map((e, i) => {
              return (
                <Employee
                  name={e.name}
                  age={e.age}
                  clk={() => this.del(i)}
                  chg={(event) => this.change(event, e.eid)}
                  key={e.eid} />
              )
            })
          }
        </div >
      )
    }
    return (
      <div>
        <button type="button" onClick={this.hide_show} className="change_content">Hide and Show</button>
        { employee_null}
      </div >
    )
  }
}
export default Frist_component