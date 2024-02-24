export default function Tabs({ children, btns, BtnsContainer }) {
    return (
    <>
      <BtnsContainer>
        {btns}
      </BtnsContainer>
      {children}
    </>
  );
}
