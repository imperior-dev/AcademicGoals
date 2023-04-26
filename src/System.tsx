import * as FileSystem from "expo-file-system"
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useState } from "react"
import { StatusBar } from "react-native"

interface ScreensType {
  [key: string]: {
    setState: React.Dispatch<React.SetStateAction<"visible" | "hidden">>;
    Component: Function;
  };
}

const screens: ScreensType = {};

export class System {
  public currentScreen: string | null;
  public setHeader: Function | null;
  public storage: Storage;
  public Screen;
  public mode: "working" | "setup";
  constructor() {
    this.log("info", "System Started");
    this.currentScreen = null;
    this.setHeader = null;
    this.mode = "working";

    this.storage = new Storage();

    this.Screen = ({
      name,
      Component,
    }: {
      name: string;
      Component: Function;
    }) => {
      const [state, setState] = useState<"visible" | "hidden">(
        name === this.currentScreen ? "visible" : "hidden"
      );

      screens[name] = {
        setState,
        Component,
      };

      if (state == "visible") return <Component system={this} />;
      return null;
    };

    SplashScreen.preventAutoHideAsync();
    StatusBar.setBarStyle("light-content");
  }

  log(type: "info" | "error", statement: string, log?: any) {
    console.log(`[${type}] ${statement}`);
    if (log) console.log(log);
  }
  async load() {
    await Promise.all([
      Font.loadAsync({
        Sora: require("../assets/fonts/Sora.ttf"),
      }),
      this.storage.load(),
    ]);
    if (Object.keys(this.storage.data).length > 0) this.navigateTo("Home");
    else {
      this.mode = "setup";
      this.navigateTo("Setup");
    }
    SplashScreen.hideAsync();
  }

  navigateTo(newScreen: string) {
    this.currentScreen = newScreen;
    Object.keys(screens).forEach((screen) => {
      if (screen === newScreen) {
        screens[screen].setState("visible");
      } else {
        screens[screen].setState("hidden");
      }
    });
    if (this.setHeader) {
      if (newScreen == "Home") this.setHeader("");
      else this.setHeader(newScreen);
    }
    this.log("info", "Navigating to " + this.currentScreen);
  }
}

class Storage {
  public data: any;
  constructor() {}
  async load() {
    const basePath = FileSystem.documentDirectory;
    try {
      var rawData = await FileSystem.readAsStringAsync(basePath + "data.json");
      this.data = JSON.parse(rawData);
    } catch {
      this.data = {};
    }
  }
}
