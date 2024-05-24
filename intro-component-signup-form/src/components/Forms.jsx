import { useState } from "react";
import Error from "./Error";
import Form from "./Form";
export default function Forms() {
  const [email, setEmail] = useState();
  const [emailResult, setEmailResult] = useState(null);
  const [input, setInput] = useState();
  const [inputResult, setInputResult] = useState();
  const ID = ["Fname", "Lname", "password"];
  const handleEmail = () => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const isValidEmail = regex.test(email);
    setEmailResult(!isValidEmail);
    if (input <= 0 || input === undefined) {
      setInputResult(true);
    } else setInputResult(false);
  };
  function handleEmailInput(value) {
    setEmail(value);
  }
  function handleInput(e) {
    var len = new String(e.target.value);
    setInput(len.length);
    console.log(len.length);
  }
  return (
    <div className="forms">
      <div>
        <Form
          Id={ID[0]}
          Type={"text"}
          ClassName={"form-input"}
          Placeholder={"First Name"}
          handleInput={(e) => {
            handleInput(e);
          }}
          inputResult={inputResult}
        />
        {inputResult ? <Error message={"First Name cannot be empty"} /> : null}
      </div>
      <div>
        <Form
          Id={ID[1]}
          Type={"text"}
          ClassName={"form-input"}
          Placeholder={"Last Name"}
          handleInput={(e) => {
            handleInput(e);
          }}
          inputResult={inputResult}
        />
        {inputResult ? <Error message={"Last Name cannot be empty"} /> : null}
      </div>
      <div className="form">
        <input
          className={emailResult ? "form-input input-error" : "form-input"}
          type={"email"}
          id={"email"}
          handleInput={(e) => {
            handleEmailInput(e.target.value);
          }}
          Placeholder={emailResult ? email : "Email adress"}
        />
        {emailResult === true && (
          <Error message={"Looks Like this is not an email"} />
        )}
        {emailResult === false && (
          <div className="div-error">
            <p className="error">An email has been sent</p>
          </div>
        )}
      </div>
      <div>
        <Form
          Id={ID[2]}
          Type={"password"}
          ClassName={"form-input"}
          Placeholder={"Password"}
          handleInput={(e) => {
            handleInput(e);
          }}
          inputResult={inputResult}
        />
        {inputResult ? <Error message={"Password cannot be empty"} /> : null}
      </div>
      <div className="btn">
        <button onClick={handleEmail} type="submit">
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="form-p">
          By clicking the button, you are agreeing to our{" "}
          <b>Terms and Services</b>
        </p>
      </div>
    </div>
  );
}
