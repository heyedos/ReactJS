export default function Form({
  Id,
  Type,
  ClassName,
  Placeholder,
  handleInput,
  inputResult,
}) {
  return (
    <div className="form">
      <input
        className={
          inputResult === true ? ClassName + " input-error" : ClassName
        }
        type={Type}
        id={Id}
        placeholder={Placeholder}
        onChange={handleInput}
      />
    </div>
  );
}
