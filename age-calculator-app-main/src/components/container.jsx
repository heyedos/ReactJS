import btnImg from "../assets/images/icon-arrow.svg";
import Bottom from "./Bottom";
import { useState } from "react";
export default function Container() {
  const [errorDay, setErrorDay] = useState(false);
  const [errorMonth, setErrorMonth] = useState(false);
  const [errorYear, setErrorYear] = useState(false);
  const [dayInput, setDayInput] = useState();
  const [monthInput, setMonthInput] = useState();
  const [yearInput, setYearInput] = useState();
  const [emptyDayError, setEmptyDayError] = useState(false);
  const [emptyMonthError, setEmptyMonthError] = useState(false);
  const [emptyYearError, setEmptyYearError] = useState(false);
  const [Day, setDay] = useState();
  const [Year, setYear] = useState();
  const [Month, setMonth] = useState();
  function handleError() {
    if (dayInput === "" || dayInput === undefined) {
      setEmptyDayError(true);
    } else if (dayInput > 30) {
      setErrorDay(true);
    } else {
      setEmptyDayError(false);
      setErrorDay(false);
    }
    if (monthInput === "" || monthInput === undefined) {
      setEmptyMonthError(true);
    } else if (monthInput > 12) {
      setErrorMonth(true);
    } else {
      setEmptyMonthError(false);
      setErrorMonth(false);
    }
    if (yearInput === "" || yearInput === undefined) {
      setEmptyYearError(true);
    } else if (yearInput > 2024) {
      setErrorYear(true);
    } else {
      setErrorYear(false);
      setEmptyYearError(false);
    }
    handleAge();
  }
  function handleDayInput(e) {
    setDayInput(e.target.value);
  }
  function handleMonthInput(e) {
    setMonthInput(e.target.value);
  }
  function handleYearInput(e) {
    setYearInput(e.target.value);
  }
  function handleAge() {
    var Year = 2024 - yearInput;
    var Month = 5 - monthInput;
    var Day = 25 - dayInput;
    if (Year === 0) {
      if (Day < 0) {
        Day += 30;
        Month -= 1;
      }
    }
    if (Day < 0 && Month < 0) {
      Month += 12;
      Day += 30;
      Year--;
    } else if (Month < 0 || Day < 0) {
      if (Month < 0) {
        Month += 12;
        Year--;
      } else if (Day < 0 && Month > 0) {
        Day += 30;
        Month--;
      }
    }
    setYear(Year);
    setDay(Day);
    setMonth(Month);
    if (yearInput > 2024 || monthInput > 12 || dayInput > 30) {
      setYear("--");
      setDay("--");
      setMonth("--");
    }
    if (
      (yearInput > 2023 && monthInput > 5) ||
      (yearInput > 2023 && monthInput > 4 && dayInput > 25)
    ) {
      setYear("--");
      setDay("--");
      setMonth("--");
      if (monthInput > 5) {
        setErrorMonth(true);
      }
      if (dayInput > 25) {
        setErrorDay(true);
      }
    }
  }
  return (
    <div className="container flex-row bg-white w-5/12 rounded-br-[10rem] rounded-2xl px-12 py-7">
      <div className="top w-full flex flex-col gap-1">
        <div className="inputs flex items-center gap-6 w-9/12">
          <div className="input flex flex-col gap-2 w-1/3">
            <label
              htmlFor="DAY"
              className={
                "tracking-[3px]" +
                (emptyDayError || errorDay
                  ? " text-Light-red"
                  : " text-Smokey-grey")
              }
            >
              DAY
            </label>
            <input
              type="text"
              name="day"
              id="DAY"
              placeholder="DD"
              onChange={(e) => {
                handleDayInput(e);
              }}
              className={
                "w-full py-2 pl-4 border-2 rounded-md hover:cursor-pointer" +
                (emptyDayError || errorDay ? " border-Light-red" : " border")
              }
            />
            {emptyDayError && (
              <div className="error">
                <p>This field is required </p>
              </div>
            )}
            {errorDay && (
              <div className="error">
                <p>Must be a valid day </p>
              </div>
            )}
          </div>
          <div className="input flex flex-col gap-2 w-1/3">
            <label
              htmlFor="MONTH"
              className={
                "tracking-[3px]" +
                (emptyMonthError || errorMonth
                  ? " text-Light-red"
                  : " text-Smokey-grey")
              }
            >
              MONTH
            </label>
            <input
              type="text"
              name="month"
              id="MONTH"
              placeholder="MM"
              onChange={(e) => {
                handleMonthInput(e);
              }}
              className={
                "w-full py-2 pl-4 border-2 rounded-md hover:cursor-pointer" +
                (emptyMonthError || errorMonth
                  ? " border-Light-red"
                  : " border")
              }
            />
            {emptyMonthError && (
              <div className="error">
                <p>This field is required </p>
              </div>
            )}
            {errorMonth && (
              <div className="error">
                <p>Must be a valid Month </p>
              </div>
            )}
          </div>
          <div className="input flex flex-col gap-2 w-1/3">
            <label
              htmlFor="YEAR"
              className={
                (emptyYearError || errorYear
                  ? "text-Light-red "
                  : "text-Smokey-grey ") + "tracking-[3px]"
              }
            >
              YEAR
            </label>
            <input
              type="text"
              name="year"
              id="YEAR"
              placeholder="YYYY"
              onChange={(e) => {
                handleYearInput(e);
              }}
              className={
                "w-full py-2 pl-4 border-2 rounded-md hover:cursor-pointer" +
                (emptyYearError || errorYear ? " border-Light-red" : " border")
              }
            />
            {emptyYearError && (
              <div className="error">
                <p>This field is required </p>
              </div>
            )}
            {errorYear && (
              <div className="error">
                <p>Must be in the past</p>
              </div>
            )}
          </div>
        </div>
        <div className="btn flex items-center justify-end w-full">
          <hr className="bg-black w-full" />
          <button
            type="button"
            onClick={handleError}
            className="bg-Custom-Purple p-4 rounded-full hover:bg-black"
          >
            <img src={btnImg} alt="" className="max-w-full block w-10" />
          </button>
        </div>
      </div>
      <Bottom Day={Day} Month={Month} Year={Year} />
    </div>
  );
}
