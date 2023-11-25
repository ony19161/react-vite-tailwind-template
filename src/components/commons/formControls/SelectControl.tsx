import { useState, useEffect, forwardRef } from "react";
import Select from "react-select";

function SelectControl(props: any, ref: any) {
    const [options, setOptions] = useState<any>([]);

    useEffect(() => {
        props.loadData((response: any) => setOptions(response));
    }, []);

    return (<Select options={options} {...props} />);
}

export default forwardRef(SelectControl);