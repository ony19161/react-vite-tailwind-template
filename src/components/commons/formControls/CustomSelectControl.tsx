import { forwardRef } from "react";
import Select from "react-select";
import { DropdownItem } from "../../../models/common/dropDownItem";


interface Props {
  id: string,
  name:string,
  options: DropdownItem[],
  isMultiSelect: boolean,
  defaultValue: DropdownItem[] | [],
  handleSelectionChange: (items: any, id: string) => any;
  handleOnBlur?: (e: any) => any | undefined;
}

function CustomSelectControl(props: Props, ref: any) {

  return (
    // <div className="container mx-auto">
    <div>
      <Select
        isClearable={true}
        ref={ref}
        key={props.id}
        defaultValue={props.defaultValue}
        isMulti={props.isMultiSelect}
        name={props.name}
        options={props.options}
        onChange={(data: any) => props.handleSelectionChange(data, props.id)}
        onBlur={props.handleOnBlur}
        className="w-full"
        classNamePrefix="select"
      />
    </div>
  );
}

export default forwardRef(CustomSelectControl);