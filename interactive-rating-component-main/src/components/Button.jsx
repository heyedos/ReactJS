export default function Button({ value, handleSelect, selectedValue }) {
  return (
    <div>
      <button
        className={value == selectedValue ? "rating clicked" : "rating"}
        value={value}
        onClick={handleSelect}
      >
        {value}
      </button>
    </div>
  );
}
