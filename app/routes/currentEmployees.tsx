import type { Route } from "./+types/home";
import { Employees } from "./pages/employees/employees";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Current Employees" },
    { name: "description", content: "Current Employees" },
  ];
}

export default function EmployeesList() {
  return <Employees />;
}
