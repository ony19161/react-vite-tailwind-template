import { useField } from "formik"
import FormInputErrorView from "../../FormInputErrorView";
import ReactDatePicker, {ReactDatePickerProps} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.min.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../../styles/ReactDatepickerCustom.css';

interface Props {
    name: string,
    label?: string
}

type AllProps = Props & ReactDatePickerProps;


export default function CustomDateInput(props: ReactDatePickerProps) {
    /*
        When we declare Partial<> for a type, all of the properties (required or non-required) in that interface or class
        becomes optional
    */
    /*
    The "!" sign in following line is a non-null assertion operator. It is a way to tell the compiler "this expression cannot be null or undefined here, 
    so don't complain about the possibility of it being null or undefined." Sometimes the type checker is unable to make that determination itself.
    */
    const [field, meta, helpers] = useField(props.name!);

    return (
        <>
            <label area-label={props.name} className="block text-sm font-bold leading-6 text-gray-900">{props.placeholderText}</label>
            <div className="mt-1">
                <ReactDatePicker
                    {...field}
                    {...props}
                    selected={(field.value && new Date(field.value)) || null}
                />
                {meta.touched && meta.error ? (
                     <FormInputErrorView fieldName={props.name!} />
                ) : null}
            </div>
        </>
    )
}