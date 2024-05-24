export default function bottom({ Day, Month, Year }) {
  return (
    <div className="bottom">
      <h1>
        <span className="text-Custom-Purple tracking-[5px]">
          {Year === undefined ? "--" : Year}
        </span>{" "}
        years
      </h1>
      <h1>
        <span className="text-Custom-Purple tracking-[5px]">
          {Month === undefined ? "--" : Month}
        </span>{" "}
        months
      </h1>
      <h1>
        <span className="text-Custom-Purple tracking-[5px]">
          {Day === undefined ? "--" : Day}
        </span>{" "}
        days
      </h1>
    </div>
  );
}
