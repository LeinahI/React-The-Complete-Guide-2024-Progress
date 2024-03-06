import Header from "./Components/Header/Header";
import UserInput from "./Components/UserInput/UserInput";
import Results from "./Components/Results/Results";
import { useState } from "react";

function App() {
  // Declare a state variable userInput and a function setUserInput to update it
  const [userInput, setUserInput] = useState({
    initialInvestment: 16000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // Check if all input values are greater than or equal to 1
  const inputIsValid =
    userInput.initialInvestment >= 1 &&
    userInput.annualInvestment >= 1 &&
    userInput.expectedReturn >= 1 &&
    userInput.duration >= 1;

  // Define a function handleChange that takes an object with inputIdentifier and newVal properties as its argument
  function handleChange(inputIdentifier, newVal) {
    // Update the state variable userInput using setUserInput function
    setUserInput((prevUserInput) => {
      // Return a new object with all properties from prevUserInput, and update the property specified by inputIdentifier with newVal
      return {
        ...prevUserInput,
        [inputIdentifier]: +newVal, //If you add a "+" on newVal, it would concatenate the newVal with the existing value of newVal in the state variable userInput[inputIdentifier]. This is assuming newVal is a string, as the behavior of the "+" operator changes based on the data types involved.
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput UserInputProp={userInput} onChangeProp={handleChange} />
      {!inputIsValid ? (
        <p className="center">
          Please enter the&nbsp;
          {userInput.initialInvestment < 1 && "initial investment, "}
          {userInput.annualInvestment < 1 && "annual investment, "}
          {userInput.expectedReturn < 1 && "expected return, "}
          {userInput.duration < 1 && "duration, "}
          greater than zero
        </p>
      ) : (
        <Results input={userInput} />
      )}
    </>
  );
}

export default App;
