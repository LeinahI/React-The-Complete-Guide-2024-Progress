export default function Tabs({ children, btns, BtnsContainer = "menu" }) {
  return (
    <>
      <BtnsContainer>{btns}</BtnsContainer>
      {children}
    </>
  );
}
