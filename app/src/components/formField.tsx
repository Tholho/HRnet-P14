import FormSelect from "./FormSelect";
export interface FormFieldProps<T = any> {
    id: string;
    text: string;
    type?: string;
    isSelect?: boolean;
    data?: T[];
    valueKey?: keyof T;
    labelKey?: keyof T;
}

const FormField = <T,>({ id, text, type, isSelect = false, data, valueKey, labelKey }: FormFieldProps<T>) => {
    return (
        <div className="m-5 flex flex-col w-50" key={id}>
            <label htmlFor={id}>{text}</label>
            {isSelect && data && valueKey && labelKey ? (
                <FormSelect id={id} data={data} valueKey={valueKey} labelKey={labelKey} />
            ) : (
                <input type={type} id={id} className="bg-white text-black p-1" />
            )}
        </div>
    );
};

export default FormField