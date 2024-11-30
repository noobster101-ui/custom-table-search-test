import "bootstrap/dist/css/bootstrap.min.css";
import { CustomCaptcha, generateCaptcha } from "custom-captcha-react";
import React, { useState } from "react";

const LoginForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Store the generated CAPTCHA
  const [userInput, setUserInput] = useState(""); // Track user input
  const [isValid, setIsValid] = useState(null); // Track CAPTCHA validity

  const handleReload = () => {
    setCaptcha(generateCaptcha());
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput === captcha) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "50px" }}>
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">Login Form</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="captchaInput"
                    value={userInput}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter CAPTCHA"
                    style={{ height: "45px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group text-center">
                  <CustomCaptcha
                    captcha={captcha}
                    onReload={handleReload}
                    backgroundColor="#eee3" // Custom canvas background
                    noiseLines={10} // Custom noise lines
                    buttonColor="#111" // Custom button background color
                    buttonTxtColor="#fff" // Custom button text color
                    buttonContent="&#x21bb;" // Custom button content
                    inputHeight="45px" // Custom input height
                  />
                </div>
              </div>
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block w-100"
                  style={{ marginTop: "20px" }}
                >
                  Submit
                </button>
                {isValid !== null && (
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "16px",
                      color: isValid ? "green" : "red",
                    }}
                  >
                    {isValid
                      ? "CAPTCHA verified successfully!"
                      : "Incorrect CAPTCHA. Please try again."}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
