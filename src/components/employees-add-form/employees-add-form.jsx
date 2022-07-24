import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      nameInputError: false,
      salaryInputError: false,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      nameInputError: false,
      salaryInputError: false,
    });
  };

  onSubmitAddItem = (e) => {
    const { name, salary } = this.state;
    e.preventDefault();
    if (name.length < 3) {
      this.setState({
        nameInputError: true,
      });
    }
    if (!salary.length) {
      this.setState({
        salaryInputError: true,
      });
    }

    if (name.length > 2 && salary.length) {
      this.props.onAddItem(this.state.name, this.state.salary);
    }
  };

  render() {
    const { name, salary, nameInputError, salaryInputError } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={this.onSubmitAddItem}
          >
            Добавить
          </button>
        </form>
        <div style={{ display: "flex" }}>
          {nameInputError && (
            <span className="errorMsg">Имя должно быть более 2х символов</span>
          )}

          {salaryInputError && <span className="errorMsg">Укажите ЗП</span>}
        </div>
      </div>
    );
  }
}

export default EmployeesAddFrom;
