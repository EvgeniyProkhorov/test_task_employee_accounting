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
      term: "",
      filter: "all",
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

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map((elem) =>
          elem.id === id ? { ...elem, [prop]: !elem[prop] } : elem
        ),
      };
    });
  };

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThan1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onChangeSalary = (id, salary) => {
    this.setState(({ data }) => {
      return {
        data: data.map((elem) =>
          elem.id === id ? { ...elem, salary: +salary } : elem
        ),
      };
    });
  };

  render() {
    const { data, term, filter } = this.state;
    const employeesCount = data.length;
    const increaseCount = data.filter((elem) => elem.increase).length;
    const visibleData = this.filterPost(
      this.searchEmployee(data, term),
      filter
    );

    return (
      <div className="app">
        <AppInfo
          employeesCount={employeesCount}
          increaseCount={increaseCount}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployeesAddFrom onAddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
