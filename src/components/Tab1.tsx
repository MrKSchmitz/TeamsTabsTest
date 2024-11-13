import { useContext } from "react";
import { TeamsFxContext } from "./Context";

export default function Tab1() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}>
      This is Tab 1
    </div>
  );
}
