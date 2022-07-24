import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.salary,
    };
  }

  onChangeSalary = (e) => {
    this.setState({
      value: +e.currentTarget.value,
    });
  };
  onBlurChangeSalary = () => {
    this.props.onChangeSalary(this.state.value);
  };

  render() {
    const { name, onDelete, onToggleProp, increase, rise } = this.props;

    let classNamesIncrease = `list-group-item d-flex justify-content-between ${
      increase ? "increase" : ""
    } ${rise ? "like" : ""}`;

    return (
      <li className={classNamesIncrease}>
        <span
          onClick={onToggleProp}
          className="list-group-item-label"
          data-toggle="rise"
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          value={this.state.value}
          onChange={this.onChangeSalary}
          onBlur={this.onBlurChangeSalary}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={onToggleProp}
            data-toggle="increase"
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
