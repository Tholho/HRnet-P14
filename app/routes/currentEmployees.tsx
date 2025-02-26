import type { Route } from "./+types/home";
import { Employees } from "../employees/employees";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Current Employees" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function EmployeesList() {
  return <Employees />;
}
