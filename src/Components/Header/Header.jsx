import style from "./Header.module.css";
import logo from "/investment-calculator-logo.png";
export default function Header() {
  return (
    <>
      <div id={style.header}>
        <img src={logo} alt="Logo" />
        <h1>React Investment Calculator</h1>
      </div>
    </>
  );
}
