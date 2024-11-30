# Custom Captcha Component

A simple and customizable CAPTCHA component for React that allows users to change the color of the refresh button, adjust the content (icon or character), and control the input height. The component renders a CAPTCHA, allows users to reload it, and validates the CAPTCHA input.

## Installation

Install the package using npm or yarn.

```bash
npm install custom-captcha
```

or

```bash
yarn add custom-captcha
```

Then import the `CustomCaptcha` component and the `generateCaptcha` function in your project.

## Usage

### Basic Example

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomCaptcha, generateCaptcha } from "custom-captcha";
import React, { useState } from "react";

const LoginForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Store the generated CAPTCHA
  const [userInput, setUserInput] = useState(""); // Track user input
  const [isValid, setIsValid] = useState(null); // Track CAPTCHA validity

  // Handler to reload the CAPTCHA
  const handleReload = () => {
    setCaptcha(generateCaptcha());
  };

  // Handle the user input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Handle form submission and validate CAPTCHA
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
                    style={{ height: "50px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group text-center">
                  <CustomCaptcha
                    captcha={captcha}
                    onReload={handleReload}
                    buttonColor="green" // Custom button background color
                    buttonTxtColor="white" // Custom button text color
                    buttonWidth="50px" // Custom button width
                    buttonContent="&#x21bb;" // Custom button content (icon or character)
                    inputHeight="55px" // Custom input height
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
```

### Customization Options

The `CustomCaptcha` component accepts the following props for customization:

- **`captcha`** (required): The CAPTCHA text that is displayed in the canvas.
- **`onReload`** (required): The callback function to reload the CAPTCHA when the refresh button is clicked.
- **`backgroundColor`** (optional): The background color of the CAPTCHA canvas. Default is `"#f2f2f2"`.
- **`font`** (optional): The font style for the CAPTCHA text. Default is `"bold 30px Arial"`.
- **`noiseLines`** (optional): The number of noise lines drawn on the canvas. Default is `6`.
- **`buttonColor`** (optional): The background color of the refresh button. Default is `"#111"`.
- **`buttonTxtColor`** (optional): The text color of the refresh button. Default is `"#fff"`.
- **`buttonWidth`** (optional): The width of the refresh button. Default is `"42px"`.
- **`buttonContent`** (optional): The content of the refresh button. You can use an icon (e.g., `"&#x21bb;"`) or a character. Default is `"&#x21bb;"` (refresh arrow).
- **`inputHeight`** (optional): The height of the CAPTCHA input field. Default is `"50px"`. You can adjust this to suit your design needs.

### Example of Customizing the CAPTCHA:

```jsx
<CustomCaptcha
  captcha={captcha}
  onReload={handleReload}
  buttonColor="green" // Custom button background color
  buttonTxtColor="white" // Custom button text color
  buttonWidth="50px" // Custom button width
  buttonContent="&#x21bb;" // Custom button content (icon or character)
  inputHeight="55px" // Custom input height
/>
```

### `generateCaptcha` Function

The `generateCaptcha` function generates a random CAPTCHA string that can be passed as the `captcha` prop to the `CustomCaptcha` component. It generates a CAPTCHA of 6 characters, consisting of lowercase letters and digits.

```javascript
import { generateCaptcha } from "custom-captcha";

const captcha = generateCaptcha();
```

## Example

Here’s how to integrate `CustomCaptcha` with a simple form where users can submit a login:

```jsx
const LoginForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(null);

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
                    style={{ height: "50px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group text-center">
                  <CustomCaptcha
                    captcha={captcha}
                    onReload={handleReload}
                    buttonColor="green"
                    buttonTxtColor="white"
                    buttonWidth="50px"
                    buttonContent="&#x21bb;"
                    inputHeight="55px"
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
```

## Conclusion

The `CustomCaptcha` component provides a simple and flexible way to add CAPTCHA functionality to your React applications with full customization options for appearance, behavior, and user experience.
