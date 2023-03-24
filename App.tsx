import { useCallback } from "react";
import { View } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import Main from "./src/Main";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora: require("./assets/fonts/Sora.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Main />
    </View>
  );
}
