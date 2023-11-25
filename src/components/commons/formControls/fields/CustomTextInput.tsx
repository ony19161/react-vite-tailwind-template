import { useField } from "formik"
import FormInputErrorView from "../../FormInputErrorView";


interface Props {
    placeholder: string,
    name: string,
    type: string,
    label?: string,
    className: string,
    disabled: boolean | undefined
}

export default function CustomTextInput(props: Props) {

    const [field, meta] = useField(props.name);

    return (
        <>
            <label area-label={props.name} className="block text-sm font-bold leading-6 text-gray-900">{props.label}</label>
            <div className="mt-1">
                <input {...field} {...props} />
                {meta.touched && meta.error ? (
                     <FormInputErrorView fieldName={props.name} />
                ) : null}
            </div>
        </>
    )
}