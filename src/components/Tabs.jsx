export default function Tabs({ children, btns }) {
  return (
    <>
      <menu>
        {btns}
      </menu>
      {children}
    </>
  );
}
