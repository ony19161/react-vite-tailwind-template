import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.min.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { getMonth, getYear, range } from "../../../utils/common";

import '../styles/ReactDatepickerCustom.css';

interface Props {
  name: string,
  placeHolderText: string,
  customDateFormat: string,
  selectedDate: Date | null,
  customStyleClassName: string,
  handleDateChange: (selectedDate: Date) => void;
}

export default function CustomDateControl(props: Props ) {
  const [defaultDate, setDate] = useState(props.selectedDate);
  
  const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const handleDateChange = (data: any) => {
      setDate(data);
      props.handleDateChange(data);
    }
  
    return (
      <div className="container mx-auto">
        <ReactDatePicker name={props.name} 
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    {"<"}
                  </button>
                  <select
                    value={getYear(date)}
                    onChange={({ target: { value } }) => changeYear(parseInt(value))}
                  >
                    {years.map((option: number) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
        
                  <select
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
        
                  <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    {">"}
                  </button>
                </div>
              )}
            showIcon={true}
            dateFormat={props.customDateFormat}
            selected={defaultDate}
            onChange={(date:any) => handleDateChange(date)}
            isClearable={true}
            placeholderText={props.placeHolderText}
        />
      </div>
    );
  }