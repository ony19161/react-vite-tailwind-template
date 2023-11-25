
function ToggleSwitch() {
  return (
    <>
    <div className="grid w-30 grid-cols-2 gap-2 rounded-xl bg-gray-200 p-2">
        <div>
            <input type="radio" name="option" id="1" value="false" className="peer hidden" checked />
            <label htmlFor="1" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-slate-500 peer-checked:font-bold peer-checked:text-white">Off</label>
        </div>

        <div>
            <input type="radio" name="option" id="2" value="true" className="peer hidden" />
            <label htmlFor="2" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">On</label>
        </div>
    </div>
    </>
  )
}

export default ToggleSwitch