import { NavLink } from "react-router";
import logo from "./logoHRnet.png"

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

const employeeFields = [
  {
    id: "first-name",
    text: "First Name",
    type: "text",
  },
  {
    id: "last-name",
    text: "Last Name",
    type: "text",
  },
  {
    id: "date-of-birth",
    text: "Date of Birth",
    type: "text",
  },
  {
    id: "start-date",
    text: "Start Date",
    type: "text",
  },
];

const addressFields = [
  {
    id: "street",
    text: "Street",
    type: "text",
  },
  {
    id: "city",
    text: "City",
    type: "text",
  },
  {
    id: "state",
    text: "State",
    isSelect: true,
  },
  {
    id: "zip-code",
    text: "Zip Code",
    type: "number",
  },
];

const statesList = [
  {
    "name": "Alabama",
    "abbreviation": "AL"
  },
  {
    "name": "Alaska",
    "abbreviation": "AK"
  },
  {
    "name": "American Samoa",
    "abbreviation": "AS"
  },
  {
    "name": "Arizona",
    "abbreviation": "AZ"
  },
  {
    "name": "Arkansas",
    "abbreviation": "AR"
  },
  {
    "name": "California",
    "abbreviation": "CA"
  },
  {
    "name": "Colorado",
    "abbreviation": "CO"
  },
  {
    "name": "Connecticut",
    "abbreviation": "CT"
  },
  {
    "name": "Delaware",
    "abbreviation": "DE"
  },
  {
    "name": "District Of Columbia",
    "abbreviation": "DC"
  },
  {
    "name": "Federated States Of Micronesia",
    "abbreviation": "FM"
  },
  {
    "name": "Florida",
    "abbreviation": "FL"
  },
  {
    "name": "Georgia",
    "abbreviation": "GA"
  },
  {
    "name": "Guam",
    "abbreviation": "GU"
  },
  {
    "name": "Hawaii",
    "abbreviation": "HI"
  },
  {
    "name": "Idaho",
    "abbreviation": "ID"
  },
  {
    "name": "Illinois",
    "abbreviation": "IL"
  },
  {
    "name": "Indiana",
    "abbreviation": "IN"
  },
  {
    "name": "Iowa",
    "abbreviation": "IA"
  },
  {
    "name": "Kansas",
    "abbreviation": "KS"
  },
  {
    "name": "Kentucky",
    "abbreviation": "KY"
  },
  {
    "name": "Louisiana",
    "abbreviation": "LA"
  },
  {
    "name": "Maine",
    "abbreviation": "ME"
  },
  {
    "name": "Marshall Islands",
    "abbreviation": "MH"
  },
  {
    "name": "Maryland",
    "abbreviation": "MD"
  },
  {
    "name": "Massachusetts",
    "abbreviation": "MA"
  },
  {
    "name": "Michigan",
    "abbreviation": "MI"
  },
  {
    "name": "Minnesota",
    "abbreviation": "MN"
  },
  {
    "name": "Mississippi",
    "abbreviation": "MS"
  },
  {
    "name": "Missouri",
    "abbreviation": "MO"
  },
  {
    "name": "Montana",
    "abbreviation": "MT"
  },
  {
    "name": "Nebraska",
    "abbreviation": "NE"
  },
  {
    "name": "Nevada",
    "abbreviation": "NV"
  },
  {
    "name": "New Hampshire",
    "abbreviation": "NH"
  },
  {
    "name": "New Jersey",
    "abbreviation": "NJ"
  },
  {
    "name": "New Mexico",
    "abbreviation": "NM"
  },
  {
    "name": "New York",
    "abbreviation": "NY"
  },
  {
    "name": "North Carolina",
    "abbreviation": "NC"
  },
  {
    "name": "North Dakota",
    "abbreviation": "ND"
  },
  {
    "name": "Northern Mariana Islands",
    "abbreviation": "MP"
  },
  {
    "name": "Ohio",
    "abbreviation": "OH"
  },
  {
    "name": "Oklahoma",
    "abbreviation": "OK"
  },
  {
    "name": "Oregon",
    "abbreviation": "OR"
  },
  {
    "name": "Palau",
    "abbreviation": "PW"
  },
  {
    "name": "Pennsylvania",
    "abbreviation": "PA"
  },
  {
    "name": "Puerto Rico",
    "abbreviation": "PR"
  },
  {
    "name": "Rhode Island",
    "abbreviation": "RI"
  },
  {
    "name": "South Carolina",
    "abbreviation": "SC"
  },
  {
    "name": "South Dakota",
    "abbreviation": "SD"
  },
  {
    "name": "Tennessee",
    "abbreviation": "TN"
  },
  {
    "name": "Texas",
    "abbreviation": "TX"
  },
  {
    "name": "Utah",
    "abbreviation": "UT"
  },
  {
    "name": "Vermont",
    "abbreviation": "VT"
  },
  {
    "name": "Virgin Islands",
    "abbreviation": "VI"
  },
  {
    "name": "Virginia",
    "abbreviation": "VA"
  },
  {
    "name": "Washington",
    "abbreviation": "WA"
  },
  {
    "name": "West Virginia",
    "abbreviation": "WV"
  },
  {
    "name": "Wisconsin",
    "abbreviation": "WI"
  },
  {
    "name": "Wyoming",
    "abbreviation": "WY"
  }
];

