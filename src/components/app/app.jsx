import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddFrom from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Иван П.", salary: 800, increase: false, rise: true, id: 1 },
        {
          name: "Анастасия Е.",
          salary: 3000,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Евгений П.",
          salary: 15000,
          increase: true,
          rise: false,
          id: 3,
        },
      ],
    };
    this.maxIdCount = 3;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((elem) => elem.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    this.maxIdCount++;
    this.setState(({ data }) => {
      return {
        data: [
          ...data,
          {
            name,
            salary: +salary,
            increase: false,
            rise: false,
            id: this.maxIdCount,
          },
        ],
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map((elem) =>
          elem.id === id ? { ...elem, increase: !elem.increase } : elem
        ),
      };
    });
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map((elem) =>
          elem.id === id ? { ...elem, rise: !elem.rise } : elem
        ),
      };
    });
  };

  render() {
    const employeesCount = this.state.data.length;
    const increaseCount = this.state.data.filter(
      (elem) => elem.increase
    ).length;

    return (
      <div className="app">
        <AppInfo
          employeesCount={employeesCount}
          increaseCount={increaseCount}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddFrom onAddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
