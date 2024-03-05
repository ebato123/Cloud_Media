import { useState } from "react";

import { formContext } from "./formContext";

export default function FormComp({ children }) {
  const [globalState, setGlobalState] = useState(
    ""
  );

  return (
    <formContext.Provider
      value={{
        globalState,
        setGlobalState
      }}
    >
      {children}
    </formContext.Provider>
  );
}