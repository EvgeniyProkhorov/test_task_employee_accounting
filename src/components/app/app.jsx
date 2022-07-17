import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddFrom from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

function App() {
  const data = [
    { name: "Иван П.", salary: 800, increase: false },
    { name: "Анастасия Е.", salary: 3000, increase: false },
    { name: "Евгений П.", salary: 15000, increase: true },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddFrom />
    </div>
  );
}

export default App;
