import { ErrorMessage } from "formik";


interface Props {
  fieldName: string
}
function FormInputErrorView(props: Props) {
  return (
    <span className="block sm:inline text-red-700 text-sm font-bold px-2">
      <ErrorMessage name={props.fieldName} />
    </span>
  )
}

export default FormInputErrorView;