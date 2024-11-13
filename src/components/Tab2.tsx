import { useContext } from "react";
import { TeamsFxContext } from "./Context";

export default function Tab2() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}>
      This is Tab 2
    </div>
  );
}
