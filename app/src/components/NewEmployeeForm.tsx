import { useRef } from "react";
import { employeeFields, addressFields, departmentSelect } from "../data/formResources"
import FormField from "./FormField"
import ModalAlert from "./ModalAlert";

const NewEmployeeForm: React.FC = () => {
    const openModalRef = useRef<HTMLButtonElement>(null);
    const handleSave = () => {
        alert("handling")
        console.log("handling")
    };
    return (
        <>
            <form>
                {
                    employeeFields.map((fields) => (
                        <FormField key={fields.id} {...fields}></FormField>
                    ))
                }
                <fieldset className="rounded-3xl border border-gray-800 dark:border-gray-400">
                    <legend className="ml-5">Address</legend>
                    {
                        addressFields.map((fields) => (
                            <FormField key={fields.id} valueKey="abbreviation" labelKey="name" {...fields}></FormField>
                        ))
                    }
                </fieldset>
                {
                    departmentSelect.map((fields) => (
                        <FormField key={fields.id} valueKey="key" labelKey="name" {...fields}></FormField>
                    ))
                }
            </form>
            <button onClick={() => {alert("TEST")}}>TEST</button>
            <button ref={openModalRef} className="border p-2 rounded self-auto border-gray-300 hover:bg-gray-600 active:translate-px" onClick={handleSave}>Save</button>
            <ModalAlert openModalRef={openModalRef} message="Employee created!"></ModalAlert>
        </>
    )
}

export default NewEmployeeForm