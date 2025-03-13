interface FormSelectProps<T> {
    id: string;
    data: T[];
    valueKey: keyof T;
    labelKey: keyof T;
}

const FormOption = <T,>({ item, valueKey, labelKey }: { item: T; valueKey: keyof T; labelKey: keyof T }) => {
    return (
        <option key={String(item[valueKey])} value={String(item[valueKey])}>
            {String(item[labelKey])}
        </option>
    );
};

const FormSelect = <T,>({ id, data, valueKey, labelKey }: FormSelectProps<T>) => {
    return (
        <select className="p-2 bg-white text-black" name={id} id={id}>
            {data.map((item) => (
                <FormOption key={String(item[valueKey])} item={item} valueKey={valueKey} labelKey={labelKey} />
            ))}
        </select>
    );
};

export default FormSelect