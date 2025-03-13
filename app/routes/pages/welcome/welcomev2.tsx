import { NavLink } from "react-router";
import logo from "./logoHRnet.png"
import { statesList, addressFields, employeeFields } from "~/src/data/formResources";
import NewEmployeeForm from "~/src/components/NewEmployeeForm";


export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-8 pb-4">
      <div className="flex-1 flex flex-col items-center gap-8 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <img
            src={logo}
            alt="Wealth Health"
          />
        </header>
        <NavLink to="/employees-list" className="rounded-2xl border p-3 bg-gray-400 hover:bg-gray-300 border-gray-200 dark:border-gray-400" >View Current Employees</NavLink>
        <section className="max-w-[400px] space-y-6 px-4">
          <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Create Employee
            </p>
            <NewEmployeeForm />
          </div>
        </section>
      </div>
    </main>
  );
}