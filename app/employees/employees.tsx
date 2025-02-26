import { NavLink } from "react-router";

export function Employees() {
    return (
        <div id="employee-div" className="w-full flex flex-col items-center">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <NavLink to="/">Home</NavLink>
        </div>
    )}