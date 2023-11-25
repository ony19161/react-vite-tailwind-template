import { useMemo } from "react";

const SelectColumnFilter = (props: { column: { filterValue: any; setFilter: any; preFilteredRows: any; id: any; }; }) =>{
    const {
      column: { filterValue, setFilter, preFilteredRows, id },
    } = props;
    // Calculate the options for filtering
    // using the preFilteredRows
    const options: any | null = useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row: any) => {
        options.add(row.values[id]);
      });
      return [...options.values()];
    }, [id, preFilteredRows]);
  
    // Render a multi-select box
    return (
      <select
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option : any , i :  number) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  export default SelectColumnFilter