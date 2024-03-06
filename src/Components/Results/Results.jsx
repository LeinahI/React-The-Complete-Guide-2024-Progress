import style from "./Results.module.css";
import {
  calculateInvestmentResults,
  formatter,
} from "../../util/investment.js";
export default function Results({ input }) {
  // Calculate investment results based on input data
  const resultData = calculateInvestmentResults(input);
  // Calculate initial investment
  const initialInvestment =
    resultData[0].valueEndOfYear - // Investment value at the end of the first year
    resultData[0].interest - // Annual interest for the first year
    resultData[0].annualInvestment; // Annual investment for the first year

  // Display the investment results in a table
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Annual Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          // Calculate total interest for the current year
          const totalInterest =
            yearData.valueEndOfYear /* Investment value at the end of the year */ -
            yearData.annualInvestment *
              yearData.year /* Total annual investment up to the current year */ -
            initialInvestment; /* Initial investment */
          /* This calculates the total interest earned during the year by subtracting 
          the total annual investment up to the current year and the initial investment 
          from the investment value at the end of the year. */

          // Calculate the total amount invested for the current year
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          /* This calculates the total amount of money that has been invested,
           which is the difference between the investment value at the end of 
           the year and the total interest earned during the year. */

          // Populate the table row with the investment data for the current year
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
