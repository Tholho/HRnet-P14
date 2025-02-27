import { NavLink } from "react-router";
import logo from "./logoHRnet.png"
import { statesList, addressFields, employeeFields } from "~/src/data/formResources";


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
            <form>
              {employeeFields.map(({ id, text, type }) => (
                <div className="m-5 flex flex-col w-50" key={id}>
                  <label htmlFor={id}>{text}</label>
                  <input type={type} id={id} className="bg-white text-black p-1"></input>
                </div>
              ))}
              <fieldset className="rounded-3xl border border-gray-200 dark:border-gray-700">
                <legend className="ml-5">Address</legend>
                {addressFields.map(({ id, text, type, isSelect = false }) => (
                  <div className="m-5 flex flex-col w-50" key={id}>
                    <label htmlFor={id}>{text}</label>
                    {isSelect ? <select className="p-2 bg-white text-black" name={id} id={id}>
                      {
                        statesList.map((state) => (
                          <option key={state.abbreviation} value={state.abbreviation}>
                            {state.name}
                          </option>
                        ))
                      }
                    </select>
                      :
                      <input type={type} id={id} className="bg-white text-black p-1"></input>
                    }
                  </div>
                ))}
              </fieldset>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}