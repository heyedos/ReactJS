import { useState } from 'react';
import Error from './Error';
import Form from './Form';
export default function Forms() {
    const [email,setEmail] = useState();
    const [emailResult,setEmailResult] = useState(null);
    const [isError,setError] = useState(false);
    const [ID,setIsID] = useState(String);
    const handleEmail = ()=> {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      const isValidEmail = regex.test(email);
      setEmailResult(!isValidEmail);
    }
    function handleEmailInput(value){
      setEmail(value);
    }
    function handleInput(e)
    {       
      if (e.currentTarget.value==="")
        {
          setError(true);
          setIsID(e.target.id);
        }
    }
    return(
        <div className="forms">
            <Form Id={"Fname"} Type={"text"} ClassName={'form-input'} Placeholder={'First Name'} handleInput={handleInput} message={"First Name cannot be empty"} selectedID={ID} isError={isError} />
            <Form Id={"Lname"} Type={"text"} ClassName={'form-input'} Placeholder={'Last Name'} message={"Last Name cannot be empty"} selectedID={ID} isError={isError} handleInput={handleInput} />
            <div className="form">
              <input className={emailResult ? 'form-input input-error' : 'form-input'} type={"email"} id={"email"} onChange={(e)=>{handleEmailInput(e.target.value)}} Placeholder={emailResult ? email : 'Email adress'}/>
              {emailResult===true && <Error message={"Looks Like this is not an email"}/>}
            {emailResult===false && <div className="div-error">
          <p className='error'>An email has been sent</p>
          </div>}
              </div>
            <Form Id={"password"} Type={"password"} ClassName={'form-input'} Placeholder={'Password'} message={"Password cannot be empty"} selectedID={ID} isError={isError} handleInput={handleInput}/>
            <div className="btn">
              <button onClick={handleEmail} type='submit'>CLAIM YOUR FREE TRIAL</button>
              <p className='form-p'>By clicking the button, you are agreeing to our <b>Terms and Services</b></p>
              </div>
          </div>
        
    );
}