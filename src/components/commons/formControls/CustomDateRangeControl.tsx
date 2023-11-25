import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.min.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { getMonth, getYear, range } from "../../../utils/common";

import '../styles/ReactDatepickerCustom.css';

interface Props {
  customDateFormat: string,
  selectedStartDate: Date,
  selectedEndDate: Date,
  handleStartDateSelection: (date: Date) => void;
  handleEndDateSelection: (date: Date) => void;
}


export default function CustomDateRangeControl(props: Props) {

    const [startDate, setStartDate] = useState(props.selectedStartDate);
    const [endDate, setEndDate] = useState(props.selectedEndDate);

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

    const handleStartDateChange = (data: any) => {
        setStartDate(data);
        props.handleStartDateSelection(data);
    }

    const handleEndDateChange = (data: any) => {
        setEndDate(data);
        props.handleEndDateSelection(data);
    }


    return (
        <>
            <div className="w-full" style={{ position: 'relative' }}>
                <span className="text-xs font-medium text-slate-400" style={{ paddingLeft: '5px' }}>From</span>
                <ReactDatePicker
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
                    selected={startDate}
                    onChange={(date:any) => handleStartDateChange(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    isClearable={true}
                    placeholderText="From date"
                />
            </div>
            <div className="w-full" style={{ position: 'relative' }}>
                <span className="text-xs font-medium text-slate-400" style={{ paddingLeft: '5px' }}>To</span>
                <ReactDatePicker
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
                    selected={endDate}
                    dateFormat={props.customDateFormat}
                    onChange={(date:any) => handleEndDateChange(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    isClearable={true}
                    placeholderText="To date"
                />
            </div>
        </>
    );
}