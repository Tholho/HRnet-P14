import { employeeFields, addressFields, departmentSelect, statesList } from "../data/formResources"
import FormField from "./formField"
const NewEmployeeForm: React.FC = () => {
    return (
        <form>
            {
                employeeFields.map((fields) => (
                    <FormField key={fields.id} {...fields}></FormField>
                ))
            }
            <fieldset className="rounded-3xl border border-gray-200 dark:border-gray-700">
                <legend className="ml-5">Address</legend>
                {addressFields.map((fields) => (
                    <FormField key={fields.id} valueKey="abbreviation" labelKey="name" {...fields}></FormField>
                ))}
            </fieldset>
            {
                departmentSelect.map((fields) => (
                    <FormField key={fields.id} valueKey="key" labelKey="name" {...fields}></FormField>
                ))
            }
        </form>
    )
}

export default NewEmployeeForm