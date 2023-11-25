import { observer } from 'mobx-react-lite';

interface Props {
  menuOptions : string[],
  selectedlunchOption: string | null,
  employeeOrderStatus: string,
  setSelected: (selectedValue: any) => void
}

const RadioButtonControl = ({menuOptions, setSelected, selectedlunchOption, employeeOrderStatus}: Props) => {
  return (
    <>
    <div style={{marginLeft: '30px'}}>
      <div>
                                {employeeOrderStatus === "Ordered" ?
                                (
                                  <p className="text-slate-900 text-sm font-semibold" style={{marginTop: '10px', marginBottom: '15px'}}>Your ordered lunch option: </p> 
                                ) :
                                (
                                  <p className="text-slate-900 text-sm font-semibold" style={{marginTop: '10px', marginBottom: '15px'}}>Please select your preferred lunch option: </p> 
                                )}
      </div>
      <div style={{marginBottom: '20px'}}>
      {menuOptions && menuOptions.map((option: any, index: any) => (
      <div key={index} className="flex items-center mb-4">
                                {selectedlunchOption?.toUpperCase() === option.toUpperCase() ?
                                (
                                  <input checked id="default-radio-1" type="radio" value={option} onChange={setSelected} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                ) :
                                (
                                  <input id="default-radio-2" type="radio" value={option}  onChange={setSelected} name="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                )}
    {/* <input id="default-radio-1" type="radio" checked={} value={option}  onChange={setSelected} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/> */}
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{option}</label>
    </div>
    ))}
      </div>    
    </div>
    </>
    );
};

export default observer(RadioButtonControl);