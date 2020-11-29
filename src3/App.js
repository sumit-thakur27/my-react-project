import React, { Component } from 'react'
import './App.css';
import Employee from './Employee/Employee'

class App extends Component {

  state = {
    Emp: [
      { eid: 1001, name: 'mohan', age: 34 },
      { eid: 1002, name: 'rohan', age: 35 },
      { eid: 1003, name: 'sohan', age: 33 },
      { eid: 1004, name: 'zohan', age: 43 }
    ],
    vbl: true
  };

  change = (event, id) => {
    const EmpCopy = [...this.state.Emp];
    const i = EmpCopy.findIndex((e) => {
      return e.eid === id;
    });
    const em = EmpCopy[i];
    em.name = event.target.value;
    EmpCopy[i] = em;
    this.setState({ Emp: EmpCopy });

  }

  show_hide = () => {
    const v = this.state.vbl;
    this.setState({ vbl: !v });
  }

  del = (i) => {
    const EmpCopy = [...this.state.Emp];
    EmpCopy.splice(i, 1);
    this.setState({ Emp: EmpCopy });
  }
  render() {
    const s = {
      fontSize: '25px',
      height: '40px',
      width: '230px'
    };

    let employees = null;
    if (this.state.vbl) {
      employees = (
        <div>
          {
            this.state.Emp.map((e, i) => {
              return <Employee
                name={e.name}
                age={e.age}
                clk={() => this.del(i)}
                chg={(event) => this.change(event, e.eid)}
                key={e.eid} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Final Example goes here</h1>
        <input type="button" style={s} value="show or hide" onClick={this.show_hide} />
        <br /><br />
        {employees}
      </div>
    );
  }
}
export default App;
