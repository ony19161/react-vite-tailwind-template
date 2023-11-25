import { useField } from "formik"
import FormInputErrorView from "../../FormInputErrorView";
import { IdValueResponse } from "../../../../models/response/idValueResponse";
import { forwardRef } from "react";

interface Props {
    placeholder: string,
    name: string,
    label?: string,
    className: string,
    options: IdValueResponse[],
    clearable: boolean,
    customHandleEvent?: any,
    disabled?: boolean
}

function CustomSingleSelectInput(props: Props, ref: any) {

    const [field, meta, helpers] = useField(props.name);

    return (
        <>
            <label area-label={props.name} className="block text-sm font-bold leading-6 text-gray-900">{props.label}</label>
            <div className="mt-1">
                <select ref={ref} name={props.name}
                    className={props.className}
                    data-te-select-clear-button={props.clearable}
                    value={field.value || ''}
                    onChange={(e) => {
                        helpers.setValue(e.target.value);
                        
                        if (props.customHandleEvent) {
                            props.customHandleEvent(e.target.value);
                        }
                    }}
                    onBlur={() => helpers.setTouched(true)}
                >
                    <option value="" disabled defaultValue={''}>{props.placeholder}</option>
                    {props.options.map((x: IdValueResponse) => <option key={x.id} value={x.id}>{x.value}</option>)}
                </select>
                {meta.touched && meta.error ? (
                     <FormInputErrorView fieldName={props.name} />
                ) : null}
            </div>
        </>
    )
}


export default forwardRef(CustomSingleSelectInput);