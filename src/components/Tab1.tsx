import { useContext } from "react";
import { TeamsFxContext } from "./Context";

export default function Tab1() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"} 
         style={{height: "100%", width: "100%", backgroundColor: "#597aff", textAlign: "center", padding: "10px", fontSize: "20px"}}>
      This is Tab 1
    </div>
  );
}
