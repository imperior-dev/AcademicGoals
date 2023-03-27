import { useCallback } from "react";
import { View } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import Main from "./src/Main";

import * as Storage from "./src/Storage";
const storage = new Storage.New();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora: require("./assets/fonts/Sora.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && storage.data !== undefined) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, storage.data]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Main storage={storage} />
    </View>
  );
}
