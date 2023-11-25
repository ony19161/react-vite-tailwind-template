import { useField } from "formik"
import FormInputErrorView from "../../FormInputErrorView";


interface Props {
    placeholder: string,
    name: string,
    rows: number,
    label?: string,
    className: string,
    maxlength?: string
}

export default function CustomTextAreaInput(props: Props) {

    const [field, meta] = useField(props.name);

    return (
        <>
            <label area-label={props.name} className="block text-sm font-bold leading-6 text-gray-900">{props.label}</label>
            <div className="mt-1">
                <textarea {...field} {...props} />
                {meta.touched && meta.error ? (
                     <FormInputErrorView fieldName={props.name} />
                ) : null}
            </div>
        </>
    )
}