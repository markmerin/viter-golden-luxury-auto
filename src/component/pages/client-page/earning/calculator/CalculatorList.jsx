import {
  dollarSign,
  numberWithCommas,
} from "@/component/helpers/functions-general";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const CalculatorList = ({ setItemEdit }) => {
  const [valueVehicleListed, setValueVehicleListed] = React.useState(1);
  const [valueDailyRate, setValueDailyRate] = React.useState(55);
  const [valueDaysRented, setValueDaysRented] = React.useState(12);
  const [valueTaxBracket, setValueTaxBracket] = React.useState(0);
  const [showCostOfTheCar, setShowCostOfTheCar] = React.useState(false);

  let annualSaving = 0;

  const handleChangeVehicleListed = (e) => {
    setValueVehicleListed(e.target.value);
  };

  const handleChangeDailyRate = (e) => {
    setValueDailyRate(e.target.value);
  };

  const handleChangeDaysRented = (e) => {
    setValueDaysRented(e.target.value);
  };

  const handleShowCostOfTheCar = () => {
    setShowCostOfTheCar(!showCostOfTheCar);
  };

  const handleChangeTaxBracket = (e) => {
    setValueTaxBracket(e.target.value);

    console.log(e.target.value);
  };

  // annual saving
  const getAnnualSaving = showCostOfTheCar
    ? 100000 * (valueTaxBracket / 100)
    : 0;

  // monthly saving
  const getMonthlySavings = getAnnualSaving / 12;

  // other miscellaneous
  const x = -199.45 + (valueDaysRented - 1) * 43.75;
  const y = (valueDailyRate - 55) / 5 + 1;
  const z = valueDaysRented * 3.25;

  // average monthly gross revenue
  const getAverageMonthlyGrossRevenue =
    (x + (y - 1) * z) * valueVehicleListed + getMonthlySavings;

  const getAnnualGrossRevenue =
    getAverageMonthlyGrossRevenue * 12 -
    359.88 * valueVehicleListed +
    getAnnualSaving;

  // console.log(getAnnualSaving);
  // console.log(valueTaxBracket);
  // console.log(showCostOfTheCar);

  return (
    <>
      <div className="relative rounded-md text-center overflow-auto z-0 flex flex-wrap items-start gap-16">
        <div className="max-w-[550px] w-full">
          <div className="pb-5">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-left text-sm">Vehicle Listed</h4>
              <span className="block text-xs">{valueVehicleListed}</span>
            </div>
            {/* <span className="block text-left disabled">Average: 12</span> */}
            <input
              type="range"
              min="1"
              max="100"
              value={valueVehicleListed}
              onChange={(e) => handleChangeVehicleListed(e)}
            />
          </div>

          <div className="pb-5">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-left text-sm">Average Daily Rate</h4>
              <span className="block text-xs">{valueDailyRate}</span>
            </div>
            {/* <span className="block text-left disabled">Average: 90</span> */}

            <input
              type="range"
              min="55"
              max="500"
              value={valueDailyRate}
              onChange={(e) => handleChangeDailyRate(e)}
            />
          </div>

          <div className="pb-5">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-left text-sm">Average Days Rented</h4>
              <span className="block text-xs">{valueDaysRented}</span>
            </div>
            {/* <span className="block text-left disabled">Average: 18</span> */}

            <input
              type="range"
              min="12"
              max="28"
              value={valueDaysRented}
              onChange={(e) => handleChangeDaysRented(e)}
            />
          </div>

          <div className="pb-5">
            <div className="relative">
              <div className="flex items-center justify-between">
                <h4 className="text-left text-sm">What is your tax bracket?</h4>
              </div>

              <div className="flex items-start justify-between">
                <div className="w-1/3">
                  <div className="flex items-center p-2 pl-0 w-fit">
                    <span className="relative flex cursor-pointer items-center rounded-full ">
                      <input
                        id="id-0"
                        name="tax-bracket"
                        value="0"
                        type="radio"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:before:bg-accent hover:before:opacity-10"
                        onChange={(e) => handleChangeTaxBracket(e)}
                        defaultChecked
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent opacity-0 transition-opacity peer-checked:opacity-100">
                        <FaCircleCheck className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </span>

                    <label
                      htmlFor="id-0"
                      className="relative left-[unset] top-[unset] transform-none cursor-pointer after:bg-transparent ml-3"
                    >
                      None
                    </label>
                  </div>

                  <div className="flex items-center p-2 pl-0 w-fit">
                    <span className="relative flex cursor-pointer items-center rounded-full ">
                      <input
                        id="id-10"
                        name="tax-bracket"
                        value="10"
                        type="radio"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:before:bg-accent hover:before:opacity-10"
                        onChange={(e) => handleChangeTaxBracket(e)}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent opacity-0 transition-opacity peer-checked:opacity-100">
                        <FaCircleCheck className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </span>

                    <label
                      htmlFor="id-10"
                      className="relative left-[unset] top-[unset] transform-none cursor-pointer after:bg-transparent ml-3"
                    >
                      10%
                    </label>
                  </div>
                  <div className="flex items-center p-2 pl-0 w-fit">
                    <span className="relative flex cursor-pointer items-center rounded-full ">
                      <input
                        id="id-12"
                        name="tax-bracket"
                        value="12"
                        type="radio"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:before:bg-accent hover:before:opacity-10"
                        onChange={(e) => handleChangeTaxBracket(e)}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent opacity-0 transition-opacity peer-checked:opacity-100">
                        <FaCircleCheck className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </span>

                    <label
                      htmlFor="id-12"
                      className="relative left-[unset] top-[unset] transform-none cursor-pointer after:bg-transparent ml-3"
                    >
                      12%
                    </label>
                  </div>
                  <div className="flex items-center p-2 pl-0 w-fit">
                    <span className="relative flex cursor-pointer items-center rounded-full ">
                      <input
                        id="id-22"
                        name="tax-bracket"
                        value="22"
                        type="radio"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:before:bg-accent hover:before:opacity-10"
                        onChange={(e) => handleChangeTaxBracket(e)}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent opacity-0 transition-opacity peer-checked:opacity-100">
                        <FaCircleCheck className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </span>

                    <label
                      htmlFor="id-22"
                      className="relative left-[unset] top-[unset] transform-none cursor-pointer after:bg-transparent ml-3"
                    >
                      22%
                    </label>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex items-center p-2 pl-0 w-fit">
                    <span className="relative flex cursor-pointer items-center rounded-full ">
                      <input
                        id="id-24"
                        name="tax-bracket"
                        value="24"
                        type="radio"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:before:bg-accent hover:before:opacity-10"
                        onChange={(e) => handleChangeTaxBracket(e)}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent opacity-0 transition-opacity peer-checked:opacity-100">
                        <FaCircleCheck className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </span>

                    <label
                      htmlFor="id-24"
                      className="relative left-[unset] top-[unset] transform-none cursor-pointer after:bg-transparent ml-3"
                    >
                      24%
                    </label>
                  </div>
                  <div className="flex items-center p-2 pl-0 w-fit">
                    <span className="relative flex cursor-pointer items-center rounded-full ">
                      <input
                        id="id-32"
                        name="tax-bracket"
                        value="32"
                        type="radio"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:before:bg-accent hover:before:opacity-10"
                        onChange={(e) => handleChangeTaxBracket(e)}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent opacity-0 transition-opacity peer-checked:opacity-100">
                        <FaCircleCheck className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </span>

                    <label
                      htmlFor="id-32"
                      className="relative left-[unset] top-[unset] transform-none cursor-pointer after:bg-transparent ml-3"
                    >
                      32%
                    </label>
                  </div>
                  <div className="flex items-center p-2 pl-0 w-fit">
                    <span className="relative flex cursor-pointer items-center rounded-full ">
                      <input
                        id="id-34"
                        name="tax-bracket"
                        value="34"
                        type="radio"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:before:bg-accent hover:before:opacity-10"
                        onChange={(e) => handleChangeTaxBracket(e)}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent opacity-0 transition-opacity peer-checked:opacity-100">
                        <FaCircleCheck className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </span>

                    <label
                      htmlFor="id-34"
                      className="relative left-[unset] top-[unset] transform-none cursor-pointer after:bg-transparent ml-3"
                    >
                      34%
                    </label>
                  </div>
                  <div className="flex items-center p-2 pl-0 w-fit">
                    <span className="relative flex cursor-pointer items-center rounded-full ">
                      <input
                        id="id-37"
                        name="tax-bracket"
                        value="37"
                        type="radio"
                        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-accent transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:before:bg-accent hover:before:opacity-10"
                        onChange={(e) => handleChangeTaxBracket(e)}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-accent opacity-0 transition-opacity peer-checked:opacity-100">
                        <FaCircleCheck className="h-3.5 w-3.5 fill-current" />
                      </div>
                    </span>

                    <label
                      htmlFor="id-37"
                      className="relative left-[unset] top-[unset] transform-none cursor-pointer after:bg-transparent ml-3"
                    >
                      37%
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-5">
            <div className="flex items-center justify-between">
              <h4 className="text-left text-sm">Cost of the Car</h4>
            </div>

            <div className="flex items-center gap-2 p-2 pl-0">
              <span
                className="relative flex cursor-pointer items-center justify-center rounded-full"
                htmlFor="select_all"
              >
                <input
                  id="car-cost"
                  type="checkbox"
                  name="car-cost"
                  value={showCostOfTheCar}
                  onChange={() => handleShowCostOfTheCar()}
                  className="p-1.5 before:content-[''] peer relative h-auto w-auto cursor-pointer border-accent appearance-none rounded-sm transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 before:transition-opacity checked:bg-accent"
                />
                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <FaCheck className="h-3 w-3" />
                </span>
              </span>

              <label
                htmlFor="car-cost"
                className="relative top-[unset] translate-x-[unset] translate-y-[unset] cursor-pointer ml-5"
              >
                {dollarSign}
                {numberWithCommas(Number(100000).toFixed(2))}
              </label>
            </div>
          </div>
        </div>

        <div className="max-w-[400px] w-full">
          <div className="pb-3">
            <div className="flex items-center justify-between">
              <h4 className="text-left text-sm font-bold">Annual Savings</h4>
              <span className="block text-sm">
                {dollarSign}
                {numberWithCommas(Number(getAnnualSaving).toFixed(2))}
              </span>
            </div>
          </div>
          <div className="pb-3">
            <div className="flex items-center justify-between">
              <h4 className="text-left text-sm font-bold">Monthly Savings</h4>
              <span className="block text-sm">
                {dollarSign}
                {numberWithCommas(Number(getMonthlySavings).toFixed(2))}
              </span>
            </div>
          </div>
          <div className="pb-3">
            <div className="flex items-center justify-between">
              <h4 className="text-left text-sm font-bold">
                Average Monthly Gross Revenue
              </h4>
              <span className="block text-sm">
                {dollarSign}
                {numberWithCommas(
                  Number(getAverageMonthlyGrossRevenue).toFixed(2)
                )}
              </span>
            </div>
          </div>

          <div className="pb-3 pt-5">
            <div className="flex items-center justify-between">
              <h4 className="text-left text-base">Annual Gross Revenue</h4>
              <span className="block text-base font-bold">
                {dollarSign}
                {numberWithCommas(Number(getAnnualGrossRevenue).toFixed(2))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorList;
