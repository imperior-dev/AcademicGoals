import { registerRootComponent } from "expo"
import { useEffect, useState } from "react"

import { MainComponent } from "./MainComponent"
import { System } from "./System"

const system = new System();

function RootComponent() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    system.load().then(() => {
      setLoaded(true);
    });
  }, []);
  if (loaded) return <MainComponent system={system} />;
  return null;
}

registerRootComponent(RootComponent);
