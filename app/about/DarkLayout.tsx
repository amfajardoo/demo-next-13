import { PropsWithChildren } from "react";

const DarkLayout = ({ children }: PropsWithChildren) => {
  return (<div
    style={{
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: "10px",
      borderRadius: "5px",
      color: "white",
    }}
  >
    <h3>Dark Layout</h3>
    {children}
  </div>);
}

export default DarkLayout;