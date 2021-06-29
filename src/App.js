import { GeistProvider, CssBaseline, Button } from "@geist-ui/react";
import TextExample from "./TextExample";
import ButtonExample from "./ButtonExample";
import ImageExample from "./ImageExample";
import IconExample from "./IconExample";
import LoadingExample from "./LoadingExample";
import GridExample from "./GridExample";
import SpacerExample from "./SpacerExample";
import CollapseExample from "./CollapseExample";
import ToastExample from "./ToastExample";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((last) => (last === "dark" ? "light" : "dark"));
  };
  return (
    <div className="App">
      <GeistProvider themeType={theme}>
        <CssBaseline />
        <Button onClick={() => changeTheme()}> Change themes</Button>
        <ToastExample />
      </GeistProvider>
    </div>
  );
}
export default App;
