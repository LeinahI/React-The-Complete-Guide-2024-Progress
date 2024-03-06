import style from "./UserInput.module.css";
export default function UserInput({onChangeProp, UserInputProp}) {
  return (
    <>
      <section id={style["user-input"]}>
        <div className={style["input-group"]}>
          <p>
            <label htmlFor="">Initial Investment</label>
            {/* Render an input element of type number */}
            {/* Set the value of the input to the initialInvestment property of userInput state */}
            <input
              value={UserInputProp.initialInvestment}
              /* Define an onChange event handler that calls the handleChange function with the inputIdentifier "initialInvestment" and the new value from the input */
              onChange={(evt) =>
                onChangeProp("initialInvestment", evt.target.value)
              }
              required
            />
          </p>
          <p>
            <label htmlFor="">Annual Investment</label>
            <input
              type="number"
              value={UserInputProp.annualInvestment}
              onChange={(evt) =>
                onChangeProp("annualInvestment", evt.target.value)
              }
              required
            />
          </p>
        </div>
        <div className={style["input-group"]}>
          <p>
            <label htmlFor="">Expected Return</label>
            <input
              type="number"
              value={UserInputProp.expectedReturn}
              onChange={(evt) =>
                onChangeProp("expectedReturn", evt.target.value)
              }
              required
            />
          </p>
          <p>
            <label htmlFor="">Duration</label>
            <input
              type="number"
              value={UserInputProp.duration}
              onChange={(evt) => onChangeProp("duration", evt.target.value)}
              required
            />
          </p>
        </div>
      </section>
    </>
  );
}
