import React from "react";

const CalculatorList = ({ setItemEdit }) => {
  const [value, setValue] = React.useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="relative rounded-md text-center overflow-auto z-0 w-[500px]">
        <div className="pb-3">
          <div className="flex items-center justify-between">
            <h4 className="text-left text-sm">Vehicle Listed</h4>
            <span className="block text-xs font-bold">{value}</span>
          </div>
          <span className="block text-left disabled">Average: 3</span>

          <input
            type="range"
            min="1"
            max="100"
            value={value}
            className="w-full p-0 rounded-sm bg-white border-0 h-fit cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="pb-3">
          <div className="flex items-center justify-between">
            <h4 className="text-left text-sm">Average Daily Rate</h4>
            <span className="block text-xs font-bold">{value}</span>
          </div>
          <span className="block text-left disabled">Average: 55</span>

          <input
            type="range"
            min="1"
            max="100"
            value={value}
            className="w-full p-0 rounded-sm bg-white border-0 h-fit cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="pb-3">
          <div className="flex items-center justify-between">
            <h4 className="text-left text-sm">Average Days Rented</h4>
            <span className="block text-xs font-bold">{value}</span>
          </div>
          <span className="block text-left disabled">Average: 55</span>

          <input
            type="range"
            min="1"
            max="100"
            value={value}
            className="w-full p-0 rounded-sm bg-white border-0 h-fit cursor-pointer"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="pb-3">
          <div className="relative">
            <label htmlFor="tax-bracket">What is your tax bracket?</label>

            <select name="" id="">
              <option value="" hidden></option>
              <option value="10">10%</option>
              <option value="12">12%</option>
              <option value="22">22%</option>
              <option value="24">24%</option>
              <option value="32">32%</option>
              <option value="35">35%</option>
              <option value="37">37%</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorList;
