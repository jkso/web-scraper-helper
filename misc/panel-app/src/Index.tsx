import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { Version } from "./components/Version";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);

ReactDOM.render(
  <Version/>,
  document.getElementById("version")
);
