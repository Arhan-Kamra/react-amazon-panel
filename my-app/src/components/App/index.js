import React, { useEffect } from "react";

import Routers from "../Routers/index";
import Styles from "./style.module.scss";

// form component, image component, input box component, label component, cta component, title component, popover component, question / suggestion component

const App = () => {
  return (
    <div>
      <Routers />
      <Data />
    </div>
  );
};

export default App;

function Data() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}
