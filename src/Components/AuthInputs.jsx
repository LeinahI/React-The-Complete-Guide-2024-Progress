import { useState } from "react";
import Button from "./Button";
import Input from "./input";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      2;
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full mx-auto max-w-sm p-8 rounded shadow-xl bg-gradient-to-b from-stone-700 to to-stone-800"
    >
      <div className="flex- flex-col gap-2 mb-6 ">
        <p className="paragraph">
          <Input
            label="Email"
            invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Input
            label="Password"
            invalid={passwordNotValid}
            type="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
