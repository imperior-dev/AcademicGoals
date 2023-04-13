import { View } from "react-native";
import { useEffect, useState } from "react";

import Main from "./src/Main";
import Core from "./src/Core";

import { statusType } from "./src/types/core";

const core = new Core();

export default function App() {
  const [status, setStatus] = useState<statusType>("loading");

  useEffect(() => {
    core.startLoad(setStatus);
  });
  //If core is loaded add the Main Element
  return (
    <View style={{ flex: 1 }}>
      {status == "loaded" ? <Main core={core} /> : null}
    </View>
  );
}
